$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#4BBFC3', '#f2f2f2']
  });
  $('#calendar').fullCalendar({
    locale: 'uk',
    height: 'parent',
    events: [
      {
        title: 'їбаш невпинно',
        dow: [0, 1, 2, 3, 4, 5, 6],
        order: 0,
      },
      {
        title: 'не їж солодкого',
        dow: [0, 1, 2, 3, 4, 5, 6],
        order: 1
      },
      {
        title: 'шоколадний макарун зі "Світу кави"',
        dow: [0, 4],
        color: '#fecc0c',
        order: 2
      },
      {
        title: 'м\'ятний макарун зі "Світу кави"',
        dow: [0],
        color: '#fecc0c',
        order: 3
      },
    ],
    eventOrder: 'order',
    eventLimit: 2
  });
});