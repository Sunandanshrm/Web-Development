/*console.log(3+5)
console.log(3*5)
console.log(2**5)
console.log(1257%5)

var i = 1
console.log(i++): first print i then add 1 to it i.e. post increment
console.log(i)
var i = 1
console.log(++i): first add 1 to i then print i i.e. pre increment
console.log(i)

var i = 1
console.log(i==1) : Equality check just the value

var i = '1'
console.log(i===1) : Equality check for both value and data type

var i = '1'
console.log(i!=2) : Negation check

var i = '1'
console.log(i!==1) : Negation check along with data type

for(i=0;i<100;i++)
{
    if(i%2 == 0)
    {
        continue
    }
    console.log(i)
}: for loop with "continue"

for(i=0;i<100;i++)
{
    if(i == 67)
    {
        break
    }
    console.log(i)
}: for loop where break is used to exit the loop

for(i=0;i<10;i++)
{
    for(j=0;j<=10;j++)
    {
        if(j%2!==0)
        {
            continue
        }
        console.log(j)
    }
}: Nested for loop with continue. It returns back to last loop
*/
for(i=0;i<10;i++)
{
    for(j=0;j<=10;j++)
    {
        if(j==5)
        {
            break
        }
        console.log(j)
    }
}