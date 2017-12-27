"use strict";

const vm = new Vue({
  el : '#app',
  data : {
    teachers : []
  },
  methods : {
    getAllTeacher : function() {
      let self = this;
      axios({
        methods: 'get',
        url: 'http://localhost:8080/ironSchool/teacher'
      })
      .then((resp) => {
        self.teachers = resp.data;
      });
    }
  }
});