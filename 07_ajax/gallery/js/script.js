let $container=$('.gallery'),  //갤러리 ul
    $loadMore=$('.load-more'), //더보기 버튼
    $added=0,                  //처음 보이는 리스트 항목에서 더보기 누를때 마다 추가(누적) 0+8=8+8=16..
    $addItemCount=4,           //4개씩 화면에 추가
    $allData=[];               //배열 json 파일을 불러와서 push를 통해 데이타 가져올 전체공간(all 30개)

    // $.getJSON('파일경로',할일 function(i,data){}) getJSON불러오는법 /파일경로는 index.html기준으로 불러와야함


    /* $.getJSON('./data/gallery.json',function(data){
        initGallery(data){
            
        }
    }); */                                                              //방법1

    $.getJSON('./data/gallery.json',initGallery);
    function initGallery(data){
        $allData=data;
        // console.log($allData);
        $loadMore.click(function(){
            addItem();
        });
        addItem();
    };



    $container.masonry({
        // options
        itemSelector: '.gallery-item',
        columnWidth: 50,
        gutter: 10
      });

    function addItem(){
        let element=[];//클릭 할 때마다 8개씩 넣기 위해 배열만든거
        let slicedData;

        slicedData=$allData.slice($added, $added += $addItemCount)//=전체 데이타에서 0~8까지 slice해서 sliceData에 넣어 /$added += 이있어야 중복된거 안가져옴
        // console.log(slicedData);

        $.each(slicedData, function(idx, item){//html에 슬라이스한 데이터 넣는 each문
            let itemHTML=
            `<li class="gallery-item">
                <a href="${item.images.large}">
                    <figure>
                        <img src="${item.images.thumb}" alt="${item.title}">
                        <figcaption>
                            ${item.title}
                        </figcaption>
                    </figure>
                </a>
            </li>`

            element.push($(itemHTML).get(0));
        });
        $container.append(element);

        $container.imagesLoaded( function() {
            $container.masonry('appended',element)
          });
        
          if($added<$allData.length){
            $loadMore.show();
          }else{
            $loadMore.hide();
          }
    };