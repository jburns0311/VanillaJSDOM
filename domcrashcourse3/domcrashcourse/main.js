//Global vars

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

//*****Form Event Listeners*****//
//submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);


//*****Functions*****//

//Add Item Function
function addItem(e){
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById('item').value;

  // Create new LI element
  var li = document.createElement('li');

  //Add a class to the new li
  li.className = 'list-group-item';

  //Add the input text from the submission
  li.appendChild(document.createTextNode(newItem));

  //Add the delete butotn to the list
  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

//Remove Item function
function removeItem(e){
  //Click Target is the X
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};

//Filter items function
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get Lis
  var items = itemList.getElementsByTagName('li');
  //Convert to array to check each letter in the search vs li's
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });


}


