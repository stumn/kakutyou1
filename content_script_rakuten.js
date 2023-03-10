let x = 0;
addFeaturesAttempt();

function addFeaturesAttempt(){
  if(!addButtons()) setTimeout(addFeaturesAttempt, 500); // retry after 500 millisecconds
}

function addButtons(){
  const existing_button = document.querySelector(".main-buttons-container--2GZLJ"); //追加したい要素＝myクーポンのとなり
  if(!existing_button) return false;

  let element = document.createElement("button"); // <button></button> ができる
  element.textContent = "Push Me!";               // <button>Push Me!</button> ができる
  element.onclick = ButtonClicked_pushme;
  existing_button.appendChild(element); // 追加する
  return true;
}

function ButtonClicked_pushme(){
  x += 1;
  if(x % 2 ==1){
    Delete();
  }
  else{
    Show();
  }
}

function Delete(){
  let big_ad = document.querySelectorAll("#bigBannerWidget");
  for(let i = 0; i < big_ad.length; i++){
    let e = big_ad[i];
    e.style.display = 'none';
  }

  let pop_rank = document.querySelectorAll("#rnkAsurakuEventContentsHasHistory");
  for(let i = 0; i < pop_rank.length; i++){
    let e = pop_rank[i];
    e.style.display = 'none';
  }

  let mobile = document.querySelectorAll("#mno-header");
  for(let i = 0; i < mobile.length; i++){
    let e = mobile[i];
    e.style.display = 'none';
  }

  let left = document.querySelectorAll("#side-navi");
  for(let i = 0; i < left.length; i++){
    let e = left[i];
    e.style.display = 'none';
  }

  let pick_up = document.querySelectorAll("#sc_ad_pickup_normal");
  for(let i = 0; i < pick_up.length; i++){
    let e = pick_up[i];
    e.style.display = 'none';
  }

  let famous_shop = document.querySelectorAll("#sc_sidAdd_rBrand");
  for(let i = 0; i < famous_shop.length; i++){
    let e =  famous_shop[i];
    e.style.display = 'none';
  }

  let recommend = document.querySelectorAll(".ad-slideshow-existItemDisplay ri-main-contents");
  for(let i = 0; i < recommend.length; i++){
    let e =  recommend[i];
    e.style.display = 'none';
  }

  let time_sale = document.querySelectorAll("#sc_ad_timesale_normal");
  for(let i = 0; i < time_sale.length; i++){
    let e =  time_sale[i];
    e.style.display = 'none';
  }

  let r_mag = document.querySelectorAll("#sc_lidAdd_rmagazine"); //idだから＃を使う
  for(let i = 0; i < r_mag.length; i++){
    let e =  r_mag[i];
    e.style.display = 'none';
  }

  let pubric_r_info = document.querySelectorAll(".group-section"); //classだから.を使う
  for(let i = 0; i < pubric_r_info.length; i++){
    let e = pubric_r_info[i];
    e.style.display = 'none';
    }
  }

function Show(){
  let big_ad = document.querySelectorAll("#bigBannerWidget");
  for(let i = 0; i < big_ad.length; i++){
    let e = big_ad[i];
    e.style.display = 'block';
  }

  let pop_rank = document.querySelectorAll("#rnkAsurakuEventContentsHasHistory");
  for(let i = 0; i < pop_rank.length; i++){
    let e = pop_rank[i];
    e.style.display = 'block';
  }

  let mobile = document.querySelectorAll("#mno-header");
  for(let i = 0; i < mobile.length; i++){
    let e = mobile[i];
    e.style.display = 'block';
  }

  let left = document.querySelectorAll("#side-navi");
  for(let i = 0; i < left.length; i++){
    let e = left[i];
    e.style.display = 'block';
  }

  let pick_up = document.querySelectorAll("#sc_ad_pickup_normal");
  for(let i = 0; i < pick_up.length; i++){
    let e = pick_up[i];
    e.style.display = 'block';
  }

  let famous_shop = document.querySelectorAll("#sc_sidAdd_rBrand");
  for(let i = 0; i < famous_shop.length; i++){
    let e =  famous_shop[i];
    e.style.display = 'block';
  }

  let recommend = document.querySelectorAll(".ad-slideshow-existItemDisplay ri-main-contents");
  for(let i = 0; i < recommend.length; i++){
    let e =  recommend[i];
    e.style.display = 'block';
  }

  let time_sale = document.querySelectorAll("#sc_ad_timesale_normal");
  for(let i = 0; i < time_sale.length; i++){
    let e =  time_sale[i];
    e.style.display = 'block';
  }

  let r_mag = document.querySelectorAll("#sc_lidAdd_rmagazine"); //idだから＃を使う
  for(let i = 0; i < r_mag.length; i++){
    let e =  r_mag[i];
    e.style.display = 'block';
  }

  let pubric_r_info = document.querySelectorAll(".group-section"); //classだから.を使う
  for(let i = 0; i < pubric_r_info.length; i++){
    let e = pubric_r_info[i];
    e.style.display = 'block';
    }
  }