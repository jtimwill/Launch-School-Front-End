// http://d3jtzah944tvom.cloudfront.net/jquery_selectors/index.html

// 1. Use the element selector to obtain all of the h1 elements.
$("h1");
// 2. Use the ID selector to obtain just the first h1 element.
$("#site_title");
// 3. Locate all of the list items within the article element using the
// descendant selector.
$("article li");
// 4. Get the third list item from the article element.
$("article li").eq(2);
//or
$("article li:eq(1)"); //Note that if you use a pseudo selector like
                      //this, jQuery will have to call the method
                      //internally. **SLOWER** than .eq() method
// 5. Select the table element. From there, find the table rows that are
// odd-numbered.
$("table").find("tr").filter(":odd");
// or
$("table").find("tr:odd");
// 6. Find the list item with text ac ante, then find the parent list item.
$("article li li").filter(":contains('ac ante')").parents("li");
// 7. Find the same list item with text ac ante, then find the next element.
$("article li li").filter(":contains('ac ante')").next();
// 8. Get all of the table cells within the table, then obtain the last one in
// the collection.
$("table td:last");
//or
$("table td").last();
// or
$("table td").eq(-1); //negative number means starting from the end of the set
// 9. Get all of the table cells, then revise your collection to not include
// cells with a class of "protected".
$("td").not(".protected");
// or
$("td:not('.protected')");
// 10. Find all of the anchor elements that have an href that begins with #.
$("a[href^=#]");
// 11. Find all elements that have a class name that contains "block".
$("[class*=block]");
