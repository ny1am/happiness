//settings
var uk_translations = {
  'title': 'Записник ділової людини',
  'event_work': 'їбаш невпинно',
  'event_diet': 'не їж солодкого',
  'event_diet_except': 'не їж солодкого, крім...',
  'event_reward': '1 шоколадний макарун зі "Світу кави"',
  'event_extra_reward': '1 м\'ятний макарун зі "Світу кави"',
};
var en_translations = {
  'title': 'Your personal life assistant',
  'event_work': 'gettin\' shit done',
  'event_diet': 'no sweets',
  'event_diet_except': 'no sweets except...',
  'event_reward': '1 "Svit kavy" choco macaron',
  'event_extra_reward': '1 "Svit kavy" mint macaron',
};
//settings

//global functions
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
window.browserLanguage = function() {
  return window.navigator.userLanguage || window.navigator.language;
}
//global functions

//global vars
window.locale = window.browserLanguage() === 'uk-UA' ? 'uk' : 'en';
window.translations = window.locale === 'uk' ? uk_translations : en_translations;
//global vars

$(document).ready(function() {
  //fullpage setup
  $('#fullpage').fullpage({
    sectionsColor: ['#4BBFC3', '#f2f2f2']
  });

  //translations
  $("[data-intl-key]").each(function(index, el) {
    var $el = $(el);
    var intlKey = $el.attr('data-intl-key');
    $el.html(window.translations[intlKey]);
  });
  $('html').attr('lang', window.locale);

  //calendar setup
  $('#calendar').fullCalendar({
    locale: window.locale,
    defaultView: window.mobilecheck()?'basicWeek':'month',
    height: 'parent',
    events: [
      {
        title: translations['event_work'],
        dow: [0, 1, 2, 3, 4, 5, 6],
        order: 0,
        color: 'rgb(58,135,173)'
      },
      {
        title: translations['event_diet'],
        dow: [1, 2, 3, 5, 6],
        order: 1,
        color: 'rgba(58,135,173,0.6)'
      },
      {
        title: translations['event_diet_except'],
        dow: [0, 4],
        order: 1,
        color: 'rgba(58,135,173,0.6)'
      },
      {
        title: translations['event_reward'],
        dow: [0, 4],
        color: 'white',
        textColor: '#542a0c',
        order: 2
      },
      {
        title: translations['event_extra_reward'],
        dow: [0],
        color: 'white',
        textColor: '#50b090',
        order: 3
      },
    ],
    eventOrder: 'order',
    eventLimit: 2
  });
});
