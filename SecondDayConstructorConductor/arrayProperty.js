//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
String.prototype.reverseThisIsh = function(){
    var string = this;
    var newString = this.split('').reverse().join('');
    return newString;
}
var newName = "this is my new name";
newName.reverseThisIsh();