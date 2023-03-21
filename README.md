# linkway
Linkway adalah aplikasi url shortening sederhana yang dibuat menggunakan html dan javascript, dan json sebagai penyimpanan datanya.

## Cara menambahkan data baru
Untuk menambahkan data baru pada aplikasi ini sangat mudah, pertama silahkan buka file **url-storage.json** lalu kamu akan menemukan 3 data awal dengan format json, key adalah short url yang akan digunakan sementara direct adalah alamat redirect situs tujuan jika keynya diakses.

    [
      {
        "key" : "social",
        "direct" : "https://joinmastodon.org/"
      },
      {
        "key" : "search",
        "direct" : "https://duckduckgo.com/"
      },
      {
        "key" : "koding",
        "direct" : "https://sekolahkoding.com/"
         }
    ]
    
## Cara menggunakan aplikasi
Setelah berhasil menambahkan data pada file **url-storage.json** maka kamu bisa menggunakan aplikasinya dengan cara mengakses alamat situs website kamu lalu menambahkan query string **?q=** yang diisikan key yang terdaftar pada **url-storage.json**.

Sebagai contoh kita memiliki key bernilai "**koding**", lalu cara mengaksesnya adalah **alamatsitus.com?q=koding** yang di mana ini nanti secara otomatis akan mendirect menuju **https://sekolahkoding.com.**
