let subjectUrl = "https://openlibrary.org/subjects/fantasy.json?limit=5"
let bookData = []
 
async function handleOnLoad()
{
    await getData();
    displayTable()
}
 
async function getData()
{
    let response = await fetch(subjectUrl)
    let data =  await response.json()
    bookData = data.works
    console.log(bookData)
}
 
function displayTable()
{
    let html = `<table>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Published Year</th>
      <th>Cover Art</th>
    </tr>`
    bookData.forEach(function(book)
    {
        html += `<tr>
            <td>${book.title}</td>
            <td>${book.authors[0].name}</td>
            <td>${book.first_publish_year}</td>
            <td><img src="https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg"/></td>
         </tr>`  
    })
    html += '</table>'
    document.getElementById('app').innerHTML = html
}