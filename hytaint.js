/*
 * Copyright 2014 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// JALANGI DO NOT INSTRUMENT
(function (sandbox) {

    /**
     * Shadow object class
     * Author: Blake Loring
    */
    function Shadow(x) {
        this.val = x;
    }

    Shadow.asShadow = function(x) {
        if (Shadow.isShadowed(x)) {
            return x;
        } else {
            return new Shadow(x);
        }
    }

    Shadow.getVal = function(v) {
        return Shadow.isShadowed(v) ? v.val : v;
    }

    Shadow.isShadowed = function(x) {
        return x instanceof Shadow;
    }

    Shadow.toString = function() {
        return 'Shadow(' + this.val + ')';
    }

    /**
     * End shadow object class
     */

    function Taint() {

        this._taintStack = [];

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            
            let isTaint = false;

            if (Shadow.isShadowed(f)) {
                f = Shadow.getVal(f);
                isTaint = true;
            }

            if (Shadow.isShadowed(base)) {
                base = Shadow.getVal(base);
                isTaint = true;
            }

            let n_args = [];

            for(let i = 0; i < args.length; i++) {
                if (Shadow.isShadowed(args[i])) {
                    n_args.push(Shadow.getVal(args[i]));
                    isTaint = true;
                } else {
                    n_args.push(args[i]);
                }
            }

            this._taintStack.push(isTaint);

            return {f: f, base: base, args: n_args, skip: false};
        };

        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
            
            if (this._taintStack.pop()) {
                result = Shadow.asShadow(result);
            }

            if (f.name == "taint") {
                result = Shadow.asShadow(result);
            } else if (f.name == "isTaint") {
                result = Shadow.isShadowed(result);
            }

            return {result: result};
        };

        this.literal = function (iid, val, hasGetterSetter) {
            return {result: val};
        };

        this.forinObject = function (iid, val) {
            return {result: val};
        };

        this.declare = function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
            return {result: val};
        };

        this.getFieldPre = function (iid, base, offset, isComputed, isOpAssign, isMethodCall) {
            let toTaint = Shadow.isShadowed(base) || Shadow.isShadowed(offset);
            this._taintStack.push(toTaint);

            base = Shadow.getVal(base);
            offset = Shadow.getVal(offset);
            
            return {
                base: base,
                offset: offset, 
                skip: false 
            };
        };

        this.getField = function (iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {
            
            if (this._taintStack.pop()) {
                val = Shadow.asShadow(val);
            }

            return {result: val};
        };

        this.putFieldPre = function (iid, base, offset, val, isComputed, isOpAssign) {
            base = Shadow.getVal(base);
            offset = Shadow.getVal(offset);
            return {base: base, offset: offset, val: val, skip: false};
        };

        this.putField = function (iid, base, offset, val, isComputed, isOpAssign) {
            return {result: val};
        };

        this.read = function (iid, name, val, isGlobal, isScriptLocal) {
            return {result: val};
        };

        this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal) {
            return {result: val};
        };

        this._return = function (iid, val) {
            return {result: val};
        };

        this._throw = function (iid, val) {
            return {result: val};
        };

        this._with = function (iid, val) {
            return {result: val};
        };

        this.functionEnter = function (iid, f, dis, args) {
        };

        this.functionExit = function (iid, returnVal, wrappedExceptionVal) {
            return {returnVal: returnVal, wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };

        this.scriptEnter = function (iid, instrumentedFileName, originalFileName) {
        };

        this.scriptExit = function (iid, wrappedExceptionVal) {
            return {wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };

        this.binaryPre = function (iid, op, left, right, isOpAssign, isSwitchCaseComparison, isComputed) {
            
            let taint = Shadow.isShadowed(left) || Shadow.isShadowed(right);
            this._taintStack.push(taint);
            left = Shadow.getVal(left);
            right = Shadow.getVal(right);
            
            return {op: op, left: left, right: right, skip: false};
        };

        this.binary = function (iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) {
            
            if (this._taintStack.pop()) {
                result = Shadow.asShadow(result);
            }

            return {result: result};
        };

        this.unaryPre = function (iid, op, left) {
            this._taintStack.push(Shadow.isShadowed(left));
            left = Shadow.getVal(left);
            return {op: op, left: left, skip: false};
        };

        this.unary = function (iid, op, left, result) {
            
            if (this._taintStack.pop()) {
                result = Shadow.asShadow(result);
            }

            return {result: result};
        };

        this.conditional = function (iid, result) {
            return {result: result};
        };

        this.instrumentCodePre = function (iid, code, isDirect) {
            return {code: code, skip: false};
        };

        this.instrumentCode = function (iid, newCode, newAst, isDirect) {
            return {result: newCode};
        };

        this.endExpression = function (iid) {
        };

        this.endExecution = function () {
        };

        this.runInstrumentedFunctionBody = function (iid, f, functionIid, functionSid) {
            return false;
        };

        this.onReady = function (cb) {
            cb();
        };
    }

    sandbox.analysis = new Taint();
})(J$);