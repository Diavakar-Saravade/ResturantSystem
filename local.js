var userID = 1;
//fetch value from local storage if available else save as 1
if (localStorage.key == userID) {
    window.localStorage.getItem(userID);
    // window.localStorage.getItem(Customer_name);
    // window.localStorage.getItem(JSON.stringify(No_of_peoples));
    // window.localStorage.getItem(JSON.stringify(Date_Time));
    // window.localStorage.getItem(Cust_message);
}
else {
    // function writeUserData(Name, How_many_peoples, Date_time, Message) {
    //     //const db = getDatabase();
    //     set(ref(database, 'users/' + userID), {
    //         Customer_name: Name,
    //         No_of_peoples: How_many_peoples,
    //         Date_Time: Date_time,
    //         Cust_message: Message,
    //     });
    window.localStorage.setItem('Name_of_cust', Customer_name);
    window.localStorage.setItem('Number_of_persons', No_of_peoples);
    window.localStorage.setItem('Date_Day', Date_time);
    window.localStorage.setItem('Customer_msg', Cust_message);
    userID++;
    //local storage must save incermented value
}
}

function saveData() {
    var userinput = prompt("Enter anything")
    localStorage.setItem("userinput", JSON.stringify(userinput));
}
function loadData() {
    var stored = localStorage.getItem('userinput');
    if (stored == null) {
        document.write("No data has been saved yet")
    } else {
        document.write('Saved Object: ' + JSON.parse(stored));
    }
}