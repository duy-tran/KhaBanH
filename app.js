var app = new Vue({
  el: '#app',
  data: {
    input: '',
    result: ''
  },
  methods: {
    change: function (text, flag) {
      if (flag == 1) {
        this.result = "";
      }
      var idx = this.getStartingIndex(this.result.toLowerCase(),text);
      this.result = this.result.substr(0,idx);
      for (var i=idx; i<text.length; i++) {
        var rand = Math.random();
        if (rand > 0.5) {
          this.result += text[i].toLowerCase();
        } else {
          this.result += text[i].toUpperCase();
        }
      }
      return this.result;
    },
    getStartingIndex: function(str1, str2) {
      var min = Math.min(str1.length, str2.length);
      for (var i=0; i<min; i++) {
        if (str1[i] != str2[i]) {
          return i;
        }
      }
      return min;
    },
    newRandomize: function(event) {
      this.result = "420";
     document.getElementById("random_result").innerHTML = this.result;
    }
  }
});
Vue.config.devtools = true;