var v_subdomain = "SUBDOMAIN";
var v_users_amount = USERCOUNT;

function getUsers(page) {

    $.ajax({
        url: "https://"+v_subdomain+".zendesk.com/api/v2/users.json?role=end-user&page=" + page,
        type: "GET",
        dataType: "JSON"
    }).done(function(results) {

        var userList = results.users;
        for (var i = 1; i < results.users.length; i++) {
            if(userList[i].suspended){
                console.log('User: '+userList[i].name + ' - https://'+v_subdomain+'.zendesk.com/agent/users/'+userList[i].id+'/requested_tickets'  );
            }
        }
    });
}

for (var j = 0; j < Math.ceil(v_users_amount/100); j++) {
    getUsers(j + 1);
}