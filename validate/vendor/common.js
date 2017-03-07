$(document).ready(function () {
		
			//点击登录按钮
	$("#btnSignup").click(function(){
				openNew();
    });
	function openNew(){
		//获取页面的高度和宽度
		var sWidth=$(document).width();
		var sHeight=$(document).height();
		//获取页面的可视区域高度和宽度
		var wHeight=$(window).height();
		var oMask ="<div id='mask'></div>";
			$("body").append(oMask);
            $("#mask").height(sHeight);
            $("#mask").width(sWidth);

			var ahtml="<div id='signup'>"+
                     "<div class='signupCon'>"+
			         "<div id='signupheader'>"+
			         "<div id='close'>点击关闭</div>"+
			         "</div>"+
			         "<form id='demoForm'>"+
    		         "<fieldset>"+
        		     "<legend align='center'>用户注册</legend>"+
        		     "<p id='info'></p>"+
        		     "<p id='info2' style='display: none'>输入错误</p>"+      			      
            	     "<p><label for='username'>用户名</label>"+
            	     "<input type='text' id='username' name='username'/></p>"+       		      
           			"<p><label for='password'>密码</label>"+
           			"<input type='password' id='password' name='password'/></p>"+       		
            		"<p><label for='confirm-password'>确认密码</label>"+
            		"<input type='password' id='confirm-password' name='confirm-password'/></p>"+        		   
            	    "<p><label for='email'>邮箱</label>"+
            	    "<input type='email' id='email' name='email'/></p>"+      		
            	    "<p><label for='text'>手机号码</label>"+
            	    "<input type='text' id='mobile' name='mobile'/></p>"+        		
           			"<p><button id='check'>检查表单</button></p>"+
           			"<p><input type='submit' value='登录'/></p>"+
			        "</form></div></div>";
			$("body").append(ahtml);
            validator1();

	    //获取登陆框的宽和高
	    var dHeight=$("#signup").outerHeight();
	    var dWidth=$("#signup").outerWidth();

		//设置登陆框的left和top
		$("#signup").css("left",sWidth/2-dWidth/2+"px");
		$("#signup").css("top",wHeight/2-dHeight/2+"px");

	    //点击关闭按钮	
		//点击登陆框以外的区域也可以关闭登陆框
		$("#close").click(function(){

					$("#signup").remove();
					$("#mask").remove();
					});

        $("#mask").click(function(){
                    $("#signup").remove();
                    $("#mask").remove();
                    });
					}
                    
    function validator1(){
    	var validator;
        $.validator.setDefaults({
            debug: true
        });

        validator = $("#demoForm").validate({
            rules: {
                username: {
                    //required: true,
                    required: true,
                    minlength: 2,
                    maxlength: 10
                },
                password: {
                    required: true,
                    minlength: 2,
                    maxlength: 16
                },
                "confirm-password": {
                    required: true,
                    equalTo: "#password"
                },
                email: {
                	required: true,
                	email: true
                },
                mobile: {
                    required: true,
                	isMobile:true
                }
            },
            messages: {
                username: {
                    required: "必须填写用户名",
                    minlength: "用户名最小为2位",
                    maxlength: "用户名最大为10位",
                    rangelength: "用户名应该在2-10位",
                    remote: "用户名不存在"
                },
                password: {
                    required: "必须填写密码",
                    minlength: "密码最小为2位",
                    maxlength: "密码最大为16位"
                },
                "confirm-password": {
                    required: "必须填写密码",
                    equalTo: "两次输入的密码不一致"
                },
                email: {
                	 required: "必须填写邮箱",
                	 email:"邮箱格式不对"
                },
                mobile: {
                    required: "必须填写手机"    
                }
            },
            submitHandler: function (form) {
                console.log($(form).serialize());
            }
        });

        $("#check").click(function () {
            alert($("#demoForm").valid() ? "填写正确！" : "填写错误！");
        });
        $.validator.addMethod("isMobile", function(value, element) {    
      	var length = value.length;    
      		return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));    
    	}, "请正确填写手机号码。");
    } 
});				

