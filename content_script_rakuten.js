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
