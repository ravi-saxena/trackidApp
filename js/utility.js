var utility = {
sendRequest: function(dataToSend,_url){
        $.ajax({
                url: _url,
                data: dataToSend,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(data) {
                utility.UserSession(data);
                },
                error: function(request) {
                alert(request.responseText);
                }
            });
    },
 UserSession: function(data){
            // utility.Redirect("dashboard.aspx?uid='"+encrypt("$",data.d)+"'");
            // utility.Redirect("dashboard.aspx?uid='"+encrypt("$","asdas")+"'");
            if(data.d=='false'){
                $('#divError').addClass("box box-error");
                $('#divError').message("Invalid!","username or password");
                $('#btnLogin').val('Login');
                $('#username').val('');
                $('#password').val('');
                $('label.error').remove();
            }
            else{
              javascript:__doPostBack('btnAddProblem',data.d);
            }
    },
 Redirect: function(url){
              var path = window.location.pathname;
              var name = path.substring(path.lastIndexOf('/') + 1);
              var _url = path.replace(name,url);
              window.location.replace(_url);
  },
  FectchQueryString: function() {
             var qsParm = new Array();
             var query = window.location.search.substring(1);
             var parms = query.split('&');
             for (var i=0; i<parms.length; i++) {
             var pos = parms[i].indexOf('=');
             if (pos > 0) {
             var key = parms[i].substring(0,pos);
             var val = parms[i].substring(pos+1);
             qsParm[key] = val;
            }
            return qsParm;
        }
    }
}