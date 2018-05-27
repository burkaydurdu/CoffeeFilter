export default class UserController {
   /*
   * @PARAM data =>
   * email , password
   */
   onLogin(data) {
      //console.log(data);
      console.log(data.email + " " + data.password);
   }
}
