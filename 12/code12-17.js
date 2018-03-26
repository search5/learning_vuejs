Vue.component('example', {
   props: {
       // 기본 타입 확인(null은 어떤 타입이든 사용할 수 있다는 뜻입니다)
       propA: Number,

       // 여러 개 타입 정의
       propB: [String, Number],

       // 문자열이며 꼭 필요합니다.
       propC: {
           type: String,
           required: true
       },

       // 숫자며 기본값을 갖습니다.
       propD: {
           type: Number,
           default: 100
       },

       // 객체/배열의 기본값은 팩토리 함수에서 반환되어야 합니다.
       propE: {
           type: Object,
           default: function() {
               return {
                   message: 'hello'
               }
           }
       },

       // 사용자화 유효성 검사 가능
       propF: {
           validator: function(value) {
               return value > 10
           }
       }
   }
});