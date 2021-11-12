const products = document.querySelector(".coat-result-product__products");

const coats = {
    products:[
        {
            image:"../asset/coatPage/products/product1.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác LEVENTS Zipper Jacket/ Black",
            voucher:"Giảm ₫35k",
            minPrice:"441.000",
            maxPrice:"630.000",
            place:"TP. Hồ Chí Minh",
            sold:"231",
            discout:"24%"
        },
        {
            image:"../asset/coatPage/products/product2.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo KHOÁC NÚT Ulzzang Unisex 1hitshop",
            voucher:"Giảm ₫10k",
            minPrice:"189.000",
            maxPrice:"199.000",
            place:"TP. Hồ Chí Minh",
            sold:"14.5k",
            discout:"15%"
        },
        {
            image:"../asset/coatPage/products/product3.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo Khoác Hoodie Nỉ Hình Mặt Buồn Xanh Rêu Siêu Lạ Unisex Ulzzang",
            voucher:"ShopDacBiet",
            minPrice:"120.000",
            maxPrice:"220.000",
            place:"Hà Nội",
            sold:"1.3k",
            discout:"30%"
        },
        {
            image:"../asset/coatPage/products/product4.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác gió nam nữ lót lông cừu cao cấp, chất gió tráng bạc chống nước, cản gió,áo gió 2 lớp lót lông dày dặn, ấmbavatu",
            voucher:"#ShopXuHuong",
            minPrice:"189.900",
            maxPrice:"398.000",
            place:"Hà Nội",
            sold:"4",
            discout:"34%"
        },
        {
            image:"../asset/coatPage/products/product5.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác TOBI Line-2Tone Hoodie UNISEX",
            voucher:"Giảm ₫20k",
            minPrice:"239.000",
            maxPrice:"550.000",
            place:"TP. Hồ Chí Minh",
            sold:"22",
            discout:"17%"
        },
        {
            image:"../asset/coatPage/products/product6.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Cài áo cardigan len nữ dày dài áo khoác màu đen nâu kaki xám ulzzang vintage Hàn Quốc mùa đông 2021 AC2",
            voucher:"ShopDacBiet",
            minPrice:"134.000",
            maxPrice:"280.000",
            place:"Hà Nội",
            sold:"133",
            discout:"24%"
        },
        {
            image:"../asset/coatPage/products/product7.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác gió lót lông cừu cho nam, áo chống nước cản gió mặc siêu ấm PADOVA-AGL",
            voucher:"#ShopXuHuong",
            minPrice:"219.000",
            maxPrice:"300.000",
            place:"Hà Nội",
            sold:"27",
            discout:"36%"
        },
        {
            image:"../asset/coatPage/products/product8.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo Khoác Hoodie Chất Nỉ Ngoại Nữ 🌸FREESHIP🌸Áo khoác nỉ from rộng Unisex",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"99.200",
            maxPrice:"178.000",
            place:"Hà Nội",
            sold:"1.5k",
            discout:"45%"
        },
        {
            image:"../asset/coatPage/products/product9.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác, áo jacket Guci sọc vai vorm rộng Unisex nam nữ mặc đều đẹp",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"34.200",
            maxPrice:"171.000",
            place:"Nam Định",
            sold:"1.8k",
            discout:"55%"
        },
        {
            image:"../asset/coatPage/products/product10.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác bóng chày Hàn Quốc (Ảnh thật) - Áo bomber Kaki siêu mềm oversized trẻ trung năng động",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"134.200",
            maxPrice:"25.000",
            place:"Hà Nội",
            sold:"1.8k",
            discout:"12%"
        },
        {
            image:"../asset/coatPage/products/product11.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác bóng chày 3 sọc cổ đứng có khóa kéo thời trang TINOWEAR Hàn Quốc Unisex cho nam nữ",
            voucher:"Mua 2 & giảm 2%",
            minPrice:"52.200",
            maxPrice:"172.800",
            place:"Hà Nội",
            sold:"2.1k",
            discout:"22%"
        },
        {
            image:"../asset/coatPage/products/product12.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ bomber nam nữ,Áo sweater hoodie nam nữ from rộng unisex K42",
            voucher:"Mua 2 & giảm 2%",
            minPrice:"99.000",
            maxPrice:"118.000",
            place:"Hà Nội",
            sold:"1k",
            discout:"16%"
        },
        {
            image:"../asset/coatPage/products/product13.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác gió nam nữ lót lông cừu cao cấp, chất gió tráng bạc chống nước, cản gió,áo gió 2 lớp lót lông dày dặn, ấmbavatu",
            voucher:"#ShopXuHuong",
            minPrice:"218.000",
            maxPrice:"398.000",
            place:"Hà Nội",
            sold:"8",
            discout:"44%"
        },
        {
            image:"../asset/coatPage/products/product14.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo Khoác Hoodie Nỉ Hình Mặt Buồn Xanh Rêu Siêu Lạ Unisex Ulzzang",
            voucher:"ShopDacBiet",
            minPrice:"120.000",
            maxPrice:"200.000",
            place:"Hà Nội",
            sold:"1.2k",
            discout:"34%"
        },
        {
            image:"../asset/coatPage/products/product15.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo bomber NY bóng chày tay da lộn unisex, áo khoác bóng chày Mophus MB002",
            voucher:"₫ 1?5.000I 15.11 lúc 00:00",
            minPrice:"115.000",
            maxPrice:"135.000",
            place:"Hà Nội",
            sold:"5.2k",
            discout:"28%"
        },
        {
            image:"../asset/coatPage/products/product16.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"[ ảnh thật + Video ] Áo Bomber unisex áo khoác nam nữ mặc được, 2 màu Đen Trắng, from to đại",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"99.000",
            maxPrice:"150.000",
            place:"Hà Nội",
            sold:"1.2k",
            discout:"18%"
        },
        {
            image:"../asset/coatPage/products/product17.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:" Áo khoác nỉ nam nữ,Áo sweater hoodie nam nữ from rộng S44",
            voucher:"ShopDacBiet",
            minPrice:"93.000",
            maxPrice:"121.000",
            place:"Hà Nội",
            sold:"632",
            discout:"44%"
        },
        {
            image:"../asset/coatPage/products/product18.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác nỉ bomber nam nữ,Áo sweater hoodie nam nữ from rộng unisex nỉ bông K34",
            voucher:"₫ 1?5.000I 15.11 lúc 00:00",
            minPrice:"109.000",
            maxPrice:"119.000",
            place:"Hà Nội",
            sold:"2.5k",
            discout:"32%"
        },
        {
            image:"../asset/coatPage/products/product19.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ bomber nam nữ,Áo sweater hoodie nam nữ from rộng unisex nỉ bông K43",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"119.000",
            maxPrice:"121.000",
            place:"Hà Nội",
            sold:"1.3k",
            discout:"14%"
        },
        {
            image:"../asset/coatPage/products/product20.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác, áo jacket Guci sọc vai vorm rộng Unisex nam nữ mặc đều đẹp",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"105.000",
            maxPrice:"195.000",
            place:"Hà Nội",
            sold:"1.8k",
            discout:"18%"
        },
        {
            image:"../asset/coatPage/products/product21.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo bomber nữ form rộng kẻ caro tay to bồng áo khoác ngoài nữ bomber Bomber TAKKEP phong cách unisex mặc đi chơi",
            voucher:"Giảm ₫5k",
            minPrice:"100.000",
            maxPrice:"160.000",
            place:"Hà Nội",
            sold:"236",
            discout:"32%"
        },
        {
            image:"../asset/coatPage/products/product22.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"[ÁO CADIGAN] Cardigan Họa Tiết Kẻ Ô, Áo Khoác Nữ Len Dày Dặn",
            voucher:"₫ 2?9.000I 15.11 lúc 00:00",
            minPrice:"196.000",
            maxPrice:"249.000",
            place:"Hà Nội",
            sold:"3.8k",
            discout:"41%"
        },
        {
            image:"../asset/coatPage/products/product23.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác bóng chày Hàn Quốc (Ảnh thật) - Áo bomber Kaki siêu mềm oversized trẻ trung năng động",
            voucher:"₫ 2?9.000I 15.11 lúc 00:00",
            minPrice:"185.000",
            maxPrice:"325.000",
            place:"Hà Nội",
            sold:"3.8k",
            discout:"30%"
        },
        {
            image:"../asset/coatPage/products/product24.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác bomber unisex ⚡ 𝐂𝐨́ 𝐕𝐢𝐝𝐞𝐨 -  𝐀̉𝐧𝐡 𝐓𝐡𝐚̣̂𝐭 ⚡ Áo bomber bóng chày H8-08 chất kaki dày dặn, mặc đi học, đi chơi",
            voucher:"Giảm ₫20k",
            minPrice:"175.000",
            maxPrice:"382.000",
            place:"Hà Nội",
            sold:"5k",
            discout:"40%"
        },
        {
            image:"../asset/coatPage/products/product25.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ in hình gấu nữ Mee- Áo Sweater dáng rộng Ulzzang Hàn Quốc",
            voucher:"Mua để nhận quà",
            minPrice:"30.000",
            maxPrice:"72.000",
            place:"Hà Nội",
            sold:"1.8k",
            discout:"50%"
        },
        {
            image:"../asset/coatPage/products/product26.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ bomber nam nữ,Áo sweater hoodie nam nữ from rộng unisex nỉ bông K50",
            voucher:"Mua để nhận quà",
            minPrice:"130.000",
            maxPrice:"322.000",
            place:"Hà Nội",
            sold:"3.2k",
            discout:"30%"
        },
        {
            image:"../asset/coatPage/products/product27.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác nỉ bomber nam nữ,Áo sweater hoodie nam nữ from rộng unisex nỉ bông K48",
            voucher:"Mua để nhận quà",
            minPrice:"310.000",
            maxPrice:"472.000",
            place:"Hà Nội",
            sold:"83",
            discout:"10%"
        },
        {
            image:"../asset/coatPage/products/product28.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác, áo jacket TINOWEAR sọc vai vorm rộng Unisex nam nữ mặc đều đẹp",
            voucher:"Mua để nhận quà",
            minPrice:"130.000",
            maxPrice:"232.000",
            place:"Hà Nội",
            sold:"845",
            discout:"35%"
        },
        {
            image:"../asset/coatPage/products/product29.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác nỉ bomber nam nữ, Áo sweater hoodie nam nữ from rộng unisex",
            voucher:"Mua để nhận quà",
            minPrice:"30.000",
            maxPrice:"72.000",
            place:"Hà Nội",
            sold:"1.8k",
            discout:"50%"
        },
        {
            image:"../asset/coatPage/products/product30.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác nỉ bomber nam nữ, Áo sweater hoodie nam nữ from rộng unisex",
            voucher:"Mua để nhận quà",
            minPrice:"30.000",
            maxPrice:"72.000",
            place:"Hà Nội",
            sold:"1.8k",
            discout:"50%"
        },
        {
            image:"../asset/coatPage/products/product31.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nam nữ thể thao ulzzang 3 sọc 🌸 Áo sweater hoodie nỉ bông kiểu dáng thể thao form rộng Unisex K45",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"63.000",
            maxPrice:"99.000",
            place:"Hà Nội",
            sold:"1.8k",
            discout:"50%"
        },
        {
            image:"../asset/coatPage/products/product32.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác hoodie nỉ form rộng cho nữ áo hoodie zip trơn 1 màu xám sành điệu",
            voucher:"ShopDacBiet",
            minPrice:"310.000",
            maxPrice:"472.000",
            place:"TP. Hồ Chí Minh",
            sold:"543",
            discout:"50%"
        },
        {
            image:"../asset/coatPage/products/product33.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác nỉ bomber nam nữ CHOOSE, Áo sweater hoodie nam nữ from rộng unisex",
            voucher:"Mua để nhận quà",
            minPrice:"99.000",
            maxPrice:"118.000",
            place:"Hà Nội",
            sold:"1.7k",
            discout:"40%"
        },
        {
            image:"../asset/coatPage/products/product34.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo bomber NY bóng chày tay da lộn unisex, áo khoác bóng chày Mophus MB002",
            voucher:"30% Giảm",
            minPrice:"43.000",
            maxPrice:"82.000",
            place:"Hà Nội",
            sold:"11.8k",
            discout:"30%"
        },
        {
            image:"../asset/coatPage/products/product35.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ ngoại dày dặn, áo hoodie nam nữ unisex ,mặc đẹp thời trang chuẩn form dáng, thời trang ZenOne Store",
            voucher:"Mua để nhận quà",
            minPrice:"130.000",
            maxPrice:"172.000",
            place:"Hà Nội",
            sold:"3.8k",
            discout:"20%"
        },
        {
            image:"../asset/coatPage/products/product36.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác nam nữ,Áo sweater hoodie in mặt cười kiểu dáng trẻ trung from rộng unisex HOT K42",
            voucher:"Mua để nhận quà",
            minPrice:"40.000",
            maxPrice:"82.000",
            place:"Hà Nội",
            sold:"1k",
            discout:"40%"
        },
        {
            image:"../asset/coatPage/products/product37.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác nỉ bomber nam nữ ,Áo sweater hoodie nam nữ cúc bấm LB 93 from rộng unisex",
            voucher:"Mua để nhận quà",
            minPrice:"95.000",
            maxPrice:"232.000",
            place:"Hà Nội",
            sold:"1.8k",
            discout:"33%"
        },
        {
            image:"../asset/coatPage/products/product38.jfif",
            subImage:"../asset/coatPage/badge/badge2.PNG",
            name:"Áo khoác len cardigan 2021, áo cardigan len nữ màu trắng đen thời trang thu đông hàn quốc",
            voucher:"Mua Kèm Deal Sốc",
            minPrice:"30.000",
            maxPrice:"72.000",
            place:"Hà Nội",
            sold:"5.8k",
            discout:"50%"
        },
        {
            image:"../asset/coatPage/products/product39.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ bomber nam nữ,Áo sweater hoodie nam nữ from rộng unisex nỉ bông K43",
            voucher:"Mua để nhận quà",
            minPrice:"430.000",
            maxPrice:"530.000",
            place:"Hà Nội",
            sold:"111",
            discout:"5%"
        },
        {
            image:"../asset/coatPage/products/product40.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ bomber nam nữ phản quang ,Áo sweater hoodie nam nữ from rộng unisex K52",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product41.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nữ nam bomber varsity jacket áo bomber 09 nỉ nữ nam unisex loại nỉ dày Mophus MB001P",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product42.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ bomber nam nữ,Áo sweater hoodie nam nữ from rộng unisex nỉ bông K50",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product43.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nam nữ thể thao ulzzang 3 sọc màu be🌸 Áo sweater hoodie nỉ bông kiểu dáng thể thao form rộng unisex K33",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product44.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác áo hoodie zip nỉ bông khóa kéo form unisex Ulzzang Hàn Quốc nhiều màu PHULA",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product45.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nam nữ thể thao ulzzang 3 sọc màu be🌸 Áo sweater hoodie nỉ bông kiểu dáng thể thao form rộng unisex KHN2",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product46.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nam nữ thể thao ulzzang 3 sọc màu be🌸 Áo sweater hoodie nỉ bông kiểu dáng thể thao form rộng unisex KHN2",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product47.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo carigan, áo nỉ, áo khoác chữ R form rộng unisex phong cách ulzzang",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product48.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo cadigan len dày, cảdigan nữ dáng dài hàn quốc kẻ caro, áo khoác len cardigan nữ thổ cẩm",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product49.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo bomber nỉ cúc bấm LB 93 áo khoác bomber nam nữ chất nỉ Mophus MB011",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product50.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác dạ nam lót lông cừu cổ cao Áo dạ nam đẹp cao cấp hàng hiệu mặc thu đông siêu ấm áp D3",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product51.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo Khoác Bomber Sturdur 2 Lớp Siêu Dày Bo Viền Siêu Đẹp  - Áo Bomber Chất Tricost Form Unisex Nam Nữ Siêu Đẹp (ảnh thật)",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product52.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo Khoác Nhung Lót Lông Túi Trước 🦋 Áo Đại Hàn 2 Lớp Khóa Kéo Có Mũ 3 Màu 🦋",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product53.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác nỉ bomber nam nữ Phản Quang ,Áo sweater hoodie nam nữ from rộng unisex K53",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product54.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo bomber NY bóng chày tay da lộn unisex, áo khoác bóng chày Mophus MB002",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product55.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo KHOÁC Hoodie SENTI Ulzzang Unisex 1hitshop",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product56.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác bomber nam nữ dù áo khoác nam nữ unisex Deepend Mophus MB009",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product57.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo KHOÁC Hoodie BASIC YOUTH Ulzzang Unisex 1hitshop",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product58.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác bomber Jacket dù 2 lớp phong cách Hàn Quốc",
            voucher:"Mua để nhận quà",
            minPrice:"60.000",
            maxPrice:"103.000",
            place:"Hà Nội",
            sold:"12k",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product59.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"[SWEATER NỮ] Áo Hoodie Nhiều Màu, Áo Khoác Nỉ Da Cá Dày Dặn",
            voucher:"#ShopXuHuong",
            minPrice:"126.000",
            maxPrice:"136.000",
            place:"Hà Nội",
            sold:"711",
            discout:"49%"
        },
        {
            image:"../asset/coatPage/products/product60.jfif",
            subImage:"../asset/coatPage/badge/badge1.PNG",
            name:"Áo khoác Hoodie Chất Liệu Nỉ Bông - Áo Hoodie Hot Trend 2021 Kiểu Dáng unisex",
            voucher:"ShopDacBiet",
            minPrice:"129.000",
            maxPrice:"259.000",
            place:"Thái Nguyên",
            sold:"230",
            discout:"48%"
        },
    ]
}

function renderProduct(){
    const htmls = coats.products.map(function(product){
        return `
            <div class="col l-2-4">
                <div class="coat-result-product__item">
                    <a href="#">
                        <div class="coat-result-product__container">
                            <img src="${product.image}"
                                alt="" class="coat-result-product__img">
                            <img src="${product.subImage}" alt=""
                                class="coat-result-product__subimg">
                            <div class="coat-result-product__discout">
                                <span style="color: #f16932;">${product.discout}</span>
                                <span>GIẢM</span>
                            </div>
                            <div class="coat-result-product__sponsor">
                                <span>tài trợ</span>
                            </div>
                            <div class="coat-result-product__like pr-5 pl-5">
                                <span>Yêu thích</span>
                            </div>
                        </div>
                        <div class="coat-result-product__content pr-10 pb-10 pl-10 pt-10">
                            <div class="coat-result-product-content__header">
                                <div class="coat-result-product__name">
                                    ${product.name}
                                </div>
                                <div class="coat-result-product__voucher">
                                    ${product.voucher}
                                </div>
                            </div>
                            <div class="coat-result-product-content__price">
                                <span>₫</span>
                                <span style="font-size: var(--font-size-md);">${product.minPrice}</span>
                                -
                                <span>₫</span>
                                <span style="font-size: var(--font-size-md);">${product.maxPrice}</span>
                            </div>
                            <div class="coat-result-product-content__evaluate flex pt-10 pb-10">
                                <div class="coat-result-product-content__heart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13"
                                        height="13" fill="currentColor" class="bi bi-heart"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </div>
                                <div class="coat-result-product-content__stars pl-10">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-half"></i>
                                </div>
                                <div class="coat-result-product-content__sold">
                                    Đã bán ${product.sold}
                                </div>
                            </div>
                            <div class="coat-result-product-content__place">
                                ${product.place}
                            </div>
                        </div>
                        <div class="coat-result-product__similar pt-10 pb-10">
                            tìm sản phẩm tương tự
                        </div>
                        <div class="cost-result-product__border"></div>
                    </a>
                </div>
            </div>
        `
    });
    products.innerHTML = htmls.join("");
}


function start(){
    renderProduct();
}
start();


