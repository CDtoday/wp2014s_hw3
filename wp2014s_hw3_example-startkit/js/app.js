(function(){

  //初始化SDK
  Parse.initialize("Xt79uoy2ps2rpiSFHeMXhM06LphfkpvbrZsee93h", "2eRyLDKyPGrgMboBAfMaWt7L7Rfddzt0BXCKpCfP");
  
  //編譯template engine函數();
  var templates = {};
  ["loginView", "evaluationView", "updateSuccessView"].forEach(function(i){
    var tpl = document.getElementById(i).text;
    templates[i] = doT.template(tpl);
  });

  //可選-編寫共用函數();
  var handler = {
    navbar: function(){
      var currentUser = Parse.User.current();
      if(currentUser){
        //顯示哪些button();
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("evaluationButton").style.display = "block";
        document.getElementById("logoutButton").style.display = "block";
        document.getElementById("user_id").innerHTML = currentUser.get("username")  //不確定要不要加
      } else {
        //顯示哪些button();
        document.getElementById("loginButton").style.display = "block";
        document.getElementById("evaluationButton").style.display = "none";
        document.getElementById("logoutButton").style.display = "none";
      } 
      document.getElementById("logoutButton").addEventListener("click", function(){
        Parse.User.logOut();
        handlers.navbar();
        window.location.hash = "login/"
      });     
    },
    loginView: function(log){
      //把版型印到瀏覽器上();
      var a = function(i){
        var log = document.getElementById(i).value;  
      }
      
      //綁定登入表單的學號檢查事件(); // 可以利用TAHelp物件
      
      //綁定註冊表單的學號檢查事件(); // 可以利用TAHelp物件
      //綁定註冊表單的密碼檢查事件(); // 參考上課範例
      //綁定登入表單的登入檢查事件(); // 送出還要再檢查一次，這裡會用Parse.User.logIn
      //綁定註冊表單的註冊檢查事件(); // 送出還要再檢查一次，這裡會用Parse.User.signUp和相關函數
    },
    evaluationView: function(){
      // 基本上和上課範例購物車的函數很相似，這邊會用Parse DB
      問看看Parse有沒有這個使用者之前提交過的peer review物件(
      沒有的話: 從TAHelp生一個出來(加上scores: [‘0’, ‘0’, ‘0’, ‘0’]屬性存分數並把自己排除掉)
      把peer review物件裡的東西透過版型印到瀏覽器上();
      綁定表單送出的事件(); // 如果Parse沒有之前提交過的peer review物件，要自己new一個。或更新分數然後儲存。
      );
    },
  };
  var router = {
    ‘’: handler.loginView,
    ‘peer-evaluation’: handler.evaluationView. 
  };
  //讓router活起來();
  this.Router = new App();
  Parse.history.start();
  handlers.navbar();
})();