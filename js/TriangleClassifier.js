var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
  if (a <= 0 || b <= 0 || c <= 0){
   return("error");
  }

  if (a !== b && b !== c && a !== c){
   return "scalene";
  }
  if (a===b && b===c){
    return "equilateral";
  }else{

    return "isosceles";
  }
  };
};
