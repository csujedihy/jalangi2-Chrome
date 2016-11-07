//For this to work, the parent file must also include
//jquery (before this)
//and https://apis.google.com/js/client.js?onload=handleGapiReady (after this)

//this is the apiKey for utdallas.irweb@gmail.com as retrieved from https://code.google.com/apis/console/
var apiKey = 'AIzaSyBmnhOsRZ6qPoQhL8nWL6oNPzhFJvnWvRo';
var scopes = 'https://www.googleapis.com/auth/calendar.readonly';

//PROTOTYPE ADDITIONS
//Ensure some functionality is present in javascript

//toISOString
//this is for formatting times for Google API queries
//https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toISOString
if ( !Date.prototype.toISOString ) {
    ( function() {
        function pad(number) {
            var r = String(number);
            if ( r.length === 1 ) {
                r = '0' + r;
            }
            return r;
        }
        Date.prototype.toISOString = function() {
            return this.getUTCFullYear()
                + '-' + pad( this.getUTCMonth() + 1 )
                + '-' + pad( this.getUTCDate() )
                + 'T' + pad( this.getUTCHours() )
                + ':' + pad( this.getUTCMinutes() )
                + ':' + pad( this.getUTCSeconds() )
                + '.' + String( (this.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
                + 'Z';
        };
    }() );
}

//http://stackoverflow.com/questions/1744310/how-to-fix-array-indexof-in-javascript-for-ie-browsers
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj, start) {
	    for (var i = (start || 0), j = this.length; i < j; i++) {
	        if (this[i] === obj) { return i; }
	    }
	    return -1;
	}
}

//CHECK READY
//Get things rolling once the document and the gapi are both ready
function checkReady() {
	if(docReady && gapiReady) calendarReady();
}

//DOCUMENT READY
var docReady = false;
$(document).ready(function(){
	docReady = true;
	$(".calendar").html("<p>Loading...</p>");
	checkReady(); //Hey gapi, I'm ready, are you?
});

//GOOGLE CALENDAR DATA LOADING
var gapiReady = false;
var requestsPending = [];

function handleGapiReady(){
	//runs when the Google API script has loaded
	//Normally we start an auth process, but since this calendar is public, auth shouldn't be necessary
	gapi.client.setApiKey(apiKey);
	gapi.client.load('calendar','v3',function(){
		gapiReady = true;
		checkReady(); //Hey document, I'm ready, are you?
	});
}

function loadEvents(reqInfo) {
	//Should be called by calendarReady for specific calendars
	//console.log("Loading events of "+reqInfo.calendarId+" for "+reqInfo.domElement);
		
	//Get times for the desired period
	var startDate = new Date(); //now
	var endDate = new Date(startDate.getTime()+(7*86400000)); //7 days later (in milliseconds)

	//Make the event list request
	var request = gapi.client.calendar.events.list({
		'calendarId': reqInfo.calendarId,
		'singleEvents': 'true',
		'timeMin': startDate.toISOString(),
		'timeMax': endDate.toISOString(),
		'orderBy': 'startTime'
	});
	
	//push the request info object onto the requestsPending array to keep track of it
	requestsPending.push(reqInfo);
	//Execute the request
	request.execute(function(response){
		//This gets executed when the request returns
		//console.log('The response is:');
		//console.log(response);
		
		for(var reqNum in requestsPending) {
			var req = requestsPending[reqNum];
			//toLowerCase to achieve case-insensitivity
			if(req.calendarName.toLowerCase() == response.summary.toLowerCase()) {
				//act on it
				//if it's got a handler specified, use it
				if(req.handler) req.handler(req.domElement,response);
				else formatEvents(req.domElement,response);
				//remove from list and stop
				//console.log('Attempting to splice '+response.summary+' at '+reqNum);
				requestsPending.splice(reqNum,1);
				//console.log(requestsPending);
				return;
			}
		}
		
		console.error("Error: couldn't find "+response.summary+" in requestsPending");
		
	}); //end 
	
} //end loadEvents()

function formatEvents(domElement,response) {
	//Go through the events in response, format them and place in domElement
	//If you want to support multiple output formats, duplicate this function.
	
	//More info about this query response:
	//https://developers.google.com/apis-explorer/#s/calendar/v3/calendar.events.list?calendarId=0kus6b617lvau6e5gqh9n7trtk%2540group.calendar.google.com&maxResults=20
	//https://developers.google.com/google-apps/calendar/v3/reference/events/list
	
	//Build the response html in here
	var hoursHTML = '';
	//var hoursHTML = '<p>'+response.summary+'</p>'; //Name of calendar
	
	if(!response.items || response.items.length==0) hoursHTML += "<p class='nextOpen closed'>Closed for the next week.</p>";

	else {
		var doneNextOpen = false;
		
		//Start the table
		hoursHTML += "<table class='hours'>";
		
		//go through the response items
		for (var evtNum in response.items) {
			var evt = response.items[evtNum];
			
			var dStart = new Date(evt.start.date? evt.start.date: evt.start.dateTime);
			var dEnd = new Date(evt.end.date? evt.end.date: evt.end.dateTime);
			/*if(evt.start.date) {
				dStart = new Date(dStart.getFullYear(), dStart.getMonth(), dStart.getDate());
				dEnd = new Date(dEnd.getFullYear(), dEnd.getMonth(), dEnd.getDate());
			}*/
			
			//If this is the first event that isn't an all-day event,
			//calculate the nextOpen text based on it
			//and stick it at the front of the hours HTML.
			//(You can tell an all-day event from a timed event by whether
			//it has evt.start.date or evt.start.dateTime, respectively)
			if(!doneNextOpen && evt.start.dateTime) {
				//Start the nextOpen element, but leave it open on the class attribute
				//so we can add an open or closed class
				var nextOpenHTML = "<p class='nextOpen ";
				var d = new Date();
				if(d < dStart) {
					nextOpenHTML += "closed'><b>Closed</b> for the next "+formatDateDifference(d,dStart);
				} else {
					nextOpenHTML += "open'><b>Open</b> for the next "+formatDateDifference(d,dEnd);
				}
				nextOpenHTML += "</p>";
				hoursHTML = nextOpenHTML + hoursHTML;
				doneNextOpen = true;
			}
			
			//Add to table
			hoursHTML += "<tr class='";
			//Add some classes to the row in some given situations
			if(dStart.getDay()==0) hoursHTML += 'sunday ';
			if(dStart.getDay()==6) hoursHTML += 'saturday ';
			if(evt.summary && evt.summary.search(/closed/i)!=-1) hoursHTML += 'closed ';
			hoursHTML += "'><td class='weekday'>";
			hoursHTML += formatWeekday(dStart,true,(evt.start.date?true:false));
			hoursHTML += "</td><td class='date'>";
			hoursHTML += formatDate(dStart,(evt.start.date?true:false));
			hoursHTML += "</td><td class='details'>";
			if(evt.start.date) {
				//If it's an all-day event, display the title
				hoursHTML += evt.summary;
			} else {
				//If it's a timed event, display the start and end times
				hoursHTML += formatTime(dStart)+" &ndash; "+formatTime(dEnd);
			}
			hoursHTML += "</td></tr>";
		}
		
		//End the table
		hoursHTML += "</table>";
		
	}

	$(domElement).html(hoursHTML);
}

function formatNext(domElement,response) {
	//derived from formatEvents, but unlike formatEvents, we only care about the next open or close, so we only need to look at the first timed (non-all-day) event. We do still have to iterate over the response list to ensure we find the first timed event.
	var responseHTML = '';
	var evt = null; //will hold the event we find
	for(var evtNum in response.items) {
		if(response.items[evtNum].start.dateTime) {
			//all-day events don't have start.dateTime, just start.date, so this is how we know it's an all-day event
			evt = response.items[evtNum];
			break;
		}
	}
	//If there were no timed events in the next week (the scope of loadEvents' search), display this
	if(evt===null) responseHTML += "<p class='nextOpen closed'>Closed for the next week.</p>";
	else {
		responseHTML += "<span class='nextOpen ";
		var d = new Date();
		var dStart = new Date(evt.start.dateTime);
		var dEnd = new Date(evt.end.dateTime);
		if(d < dStart) {
			//nextOpenHTML += "closed'><b>Closed</b> for the next "+formatDateDifference(d,dStart);
			responseHTML += "closed'><b>Closed</b> until "+formatTime(dStart)+" "+formatWeekday(dStart,true);
		} else {
			//responseHTML += "open'><b>Open</b> for the next "+formatDateDifference(d,dEnd);
			responseHTML += "open'><b>Open</b> until "+formatTime(dEnd)+" "+formatWeekday(dStart,true);
		}
		responseHTML += '</span>';
	}
	$(domElement).html(responseHTML);
}

function formatWeekday(d,useRelative,useUTC) {
	//Returns weekday
	//if useRelative is true, returns a relative word, "today" or "tomorrow"
	//useUTC is necessary because all-day events are specified in UTC
	if(useRelative) {
		//compare today's date to event date by setting date objects to midnight
		var dT = new Date(); dT.setHours(0), dT.setMinutes(0), dT.setSeconds(0), dT.setMilliseconds(0);
		var dE = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0, 0)
		var diff = Math.floor(Math.abs(dT-dE)/86400000);
		if(diff == 0) { return 'Today'; } //console.log('formatDate '+d+'/'+dT+' = today'); 
		if(diff == 1) { return 'Tomorrow'; } //console.log('formatDate '+d+'/'+dT+' = tomorrow');
	}
	//if we get here, we haven't returned a relative word, so return the weekday instead
	//javascript doesn't natively give you a way to format dates in English (beyond the default English full formats)
	//so make an array of weekday names. It will be 0-index (Sunday is 0), but so is d.getDay() so it works out.
	weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	return weekdays[(useUTC?d.getUTCDay():d.getDay())];
}

function formatDate(d,useUTC) {
	//Returns date in form of M/D e.g. 1/15
	//useUTC is necessary because all-day events are specified in UTC
	//Note that d.getMonth() is 0-index so January is 0
	return (useUTC?d.getUTCMonth()+1:d.getMonth()+1)+"/"+(useUTC?d.getUTCDate():d.getDate());
}

function formatTime(d) {
	//Returns time in form of H:MMaa (12-hour)
	var hr = d.getHours();
	if(d.getHours() > 12) hr -= 12;
	if(d.getHours() < 1) hr += 12;
	var ap = (d.getHours()<12 ? 'am' : 'pm');
	//pad the minutes with a zero if less than 10
	return hr+":"+(d.getMinutes()<10?'0':'')+d.getMinutes()+ap;
}

function formatDateDifference(d,d2) {
	var diff = Math.abs(d.getTime()-d2.getTime());
	var dd = Math.floor(diff/86400000);
	var dh = Math.floor(diff/3600000) - (dd*24);
	var dm = Math.floor(diff/60000) - (dd*24*60) - (dh*60);
	var result = '';
	result += (dd>0?dd+' day'+(dd!=1?'s':''):''); //days
	result += (dd>0 && dh>0 ? ' ' : ''); //add a space if days & hours
	result += (dh>0?dh+' hour'+(dh!=1?'s':''):''); //hours
	result += (dh>0 && dm>0 ? ' ' : ''); //add a space if hours & minutes
	result += (dm>0?dm+' minute'+(dm!=1?'s':''):(dh==0&&dd==0?"&lt;1 minute":'')); //minutes
		//if days, hours, and minutes are all zero, write "<1 minute"
	return result;
}