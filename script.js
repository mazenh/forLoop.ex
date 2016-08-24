//EX.1
for(i=120;i<=140;i++){
	document.write(i,' ');
};

//EX.2

  for (i=0; i<5; i++)
{
    for (j=0; j<=i; j++)
    {
        document.write("*");
    }
        document.write("<br/>");
};

//EX.3
var diana={height:170,weight:60,age:19};
var aya={height:168,weight:55,age:26};
var mazen={height:180,weight:92,age:30};
var course=[diana,aya,mazen];
for(var i=0;i<4;i++){
	document.write(course[i].height);
	document.write('<br/>');
	
}
//EX.4
var diana={height:170,weight:60,age:19};
var aya={height:168,weight:55,age:26};
var mazen={height:180,weight:92,age:30};
var course=[diana,aya,mazen];
for(var i=0;i<4;i++){
    course[i].height=175;
}


