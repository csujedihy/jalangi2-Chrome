// <![CDATA[
function calendarReady() {
  //Called when the document and calendar API are both ready.
  //Call loadEvents for each calendar you want to render.
  //Each calendar must be public.

  //You can specify the handler, as here (if you have multiple handlers, each with a different formatting style)
  //calendarName is case-insensitive but must otherwise match exactly
  loadEvents({
    calendarId: '0kus6b617lvau6e5gqh9n7trtk@group.calendar.google.com',
    calendarName: 'Jonsson Lab',
    handler: formatEvents,
    domElement: "#jonsson"
  });

  //...or you can omit the handler and it will use formatEvents by default
  loadEvents({
    calendarId: 'b9p9ibvjl1n155dlhlu5e0bm14@group.calendar.google.com',
    calendarName: 'Founders Commons Lab',
    domElement: "#founders"
  });
  loadEvents({
    calendarId: '3bi4r38hcdthdvqt1paal93sc0@group.calendar.google.com',
    calendarName: 'Sonora Lab',
    domElement: "#sonora"
  });
  loadEvents({
    calendarId: 'p1g55hgankfbtk0kqeesb2aoas@group.calendar.google.com',
    calendarName: 'Help Desk Email',
    domElement: "#helpdeskemail"
  });
  loadEvents({
    calendarId: 'eimodht25jqv5vgch5fl19apjo@group.calendar.google.com',
    calendarName: 'Help Desk Phones',
    domElement: "#helpdeskphones"
  });
}
// ]]&gt;