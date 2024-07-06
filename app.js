let count = 0;

  const bnt = document.querySelector('.bnt');
  const reset = document.querySelector('.reset');
  const compteur = document.querySelector('.numbers');

  bnt.addEventListener('click' , increment);

  function increment(){
    count += 1 ;
    if ( count < 10 ){
      counts = "0" + count;  
    }
    else{
      counts = count;
    }
     compteur.innerHTML = counts;
  }

  reset.addEventListener('click' , initialization);

  function initialization(){
    count = 0;
    counts = "0" + count;
    compteur.innerHTML = counts;
  }