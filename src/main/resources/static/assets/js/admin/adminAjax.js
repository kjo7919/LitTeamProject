console.log("Admin Module......");

let adminService = (function(){
    console.log("adminSevice");
    function searchUser(searchInfo, callback, error){
        $.ajax({
            url: "/admin/searchUser",
            type: "post",
            data: JSON.stringify(searchInfo),
            contentType: "application/json",
            dataType: "json",
            success: function(result){
                if(callback){
                    callback(result);
                }
            },
            error: function(xhr, status, er) {
                if(error){
                    error(er);
                }
            }
        });
    }

    function deleteUser(list, callback, error){
        $.ajax({
            url: "/admin/user/" + list,
            type : "delete",
            success: function () {
                if(callback){
                    console.log("삭제 완료")
                    callback();
                }
            },
            error: function(xhr, status, er){
                if(error){
                    error(er);
                }
            }
        })
    }

    function searchProject(searchInfo, callback, error) {
        console.log(searchInfo);
        $.ajax({
            url: "/admin/waitingProject/search",
            type : "post",
            data : JSON.stringify(searchInfo),
            contentType: "application/json",
            dataType: "json",
            success : function (result) {
                if(callback){
                    callback(result);
                }
            },
            error : function (xhr, status, er) {
                if(error){
                    error(er);
                }
            }
        })

    }

    function deleteProject(list, callback, error){
        $.ajax({
            url: "/admin/waitingProject/" + list,
            type : "delete",
            success: function () {
                if(callback){
                    console.log("삭제 완료")
                    callback();
                }
            },
            error: function(xhr, status, er){
                if(error){
                    error(er);
                }
            }
        })
    }

    function changeStatus(info, callback, error) {
        $.ajax({
            url : "/admin/waitingProject/" + info.projectNumber + "/" + info.status,
            type : "get",
            success: function () {
                if(callback){
                    callback();
                }
            },
            error: function(xhr, status, er){
                if(error){
                    error(er);
                }
            }
        })

    }

    return {
        searchUser:searchUser,
        deleteUser:deleteUser,
        searchProject:searchProject,
        deleteProject:deleteProject,
        changeStatus:changeStatus
    };
})();