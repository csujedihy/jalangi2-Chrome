#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.
# A simple native messaging host. Shows a Tkinter dialog with incoming messages
# that also allows to send message back to the webapp.
import struct
import sys
import threading
import Queue
import random
import string
import base64
import json
import shlex

import traceback
import logging

from StringIO import StringIO
from subprocess import CalledProcessError, Popen, PIPE, STDOUT

cmd = 'mitmdump -p 9999 --anticache -s "jalangi2/scripts/proxy.py --inlineIID --inlineSource --analysis analysis-script/07O0H5EF0Q.js"'
p = Popen(shlex.split(cmd), stdout=None, stdin=PIPE, stderr=None, shell=False)
print "asdasdasd"