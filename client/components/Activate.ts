export class Activate {

    constructor(){
        console.log("Activate class");
    }

    static userTokenCheck(user, token, callback){
        $.ajax({
            method: 'POST',
            url: '/rs/login/activate',
            data: {
                'username': user,
                'token': token
            },
            cache: false,
            timeout: 5000,
        }).done(function (res) {
            console.log(res.type);
                if (res.type) {

                } else {
                    swal("Wrong credentials!", "Did you sign up?", "error");
                }
                return res.type;
            })
            .fail(function (xhr, textStatus, errorThrown) {
                swal("Oops...", "Something went wrong!", "error");
            });

    }
}