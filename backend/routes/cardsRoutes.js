import express from "express";

const router = express.Router();

const cards = [
  {
    id: 1,
    name: "Aerodactyl",
    power: 100,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297372322_aerodactyl-pok%C3%83%C2%A9mon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=SVqvby2GStA1tOfRRLCet8sfx1Wwt9mhN18bon1QGhRBgtJ7r%2BAfT6LpdOiehFH5wXhzXjVhUGdcEuWKjXyUbztr5NNbULsz42lsxD2qo4AaLG5PutNEGuYZxQ4wu2LLD8NNzq3hAEJsPUIGc5oM14vD87gJ6bFBi5zzutFuhUZDtQcjQUNjzaR6tgj5zpi0TfgnTh8Jmd%2FwKTCEskomSiq9QRXv%2FJNiEWeFT76wESeJGDnZAOlYax6OlRX%2BP521AH6alPvNhGwIa3YsjKhfy%2FkCA%2BRCLIZwfE5L1aJ7oomobDg8%2BhIkCJVno6%2BpG5p9jt50I227beiMNH9stEsEOA%3D%3D",
  },
  {
    id: 2,
    name: "Archen-",
    power: 90,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 3,
    name: "Aggron-",
    power: 80,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297592785_aggron-pok%C3%83%C2%A9mon-aggron.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=SW%2FjDsGJnIeWpvegLCEerXYwWOQwDGvuvfG4ghOLIlTHm3yjh7LBw6onxujkyLGhp5OemAox%2B8IKp8JbODW2iZ42O0jPO9ouRXQOo3B2YiDL7CIuyyr9%2Fs9euB8Kh2wvqfYE0drnmy7vwQeofl5xzPuBl6FE8oMzmy83FcQzHLUtUrLwfxIDbKpOUMKxaCb8kCpD30IOYbX8RVqa4erstn%2BC2usL9yOboBNWxUfTcaqmc%2F8bi0r2MHHPR5xLlAV305zOwB6BJY%2FVRuuCtDyAy3kfeGtnRMo%2FZE1HPAnpwSeXwl0p6QigwuhxBWAvKHB36RuCnyPzBfex4X1EJBTowg%3D%3D",
  },
  {
    id: 4,
    name: "Tyranitar-",
    power: 70,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 5,
    name: "Aurorus-",
    power: 60,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 6,
    name: "Bastiodon",
    power: 50,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 7,
    name: "Baxcalibur",
    power: 40,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 8,
    name: "Cranidos",
    power: 30,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 9,
    name: "Blastoise",
    power: 20,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 10,
    name: "Dracozolt",
    power: 100,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 11,
    name: "Lapras",
    power: 90,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 12,
    name: "Leafeon",
    power: 80,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 13,
    name: "Mega-garchomp",
    power: 70,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 14,
    name: "Meganium-growl",
    power: 60,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 15,
    name: "Nidoking",
    power: 50,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 16,
    name: "Feraligatr.",
    power: 40,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 17,
    name: "Pidgeotto",
    power: 30,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
  {
    id: 18,
    name: "Tropius-meganium",
    power: 20,
    image:
      "https://storage.googleapis.com/pokemon-27d43.firebasestorage.app/images/1739297717150_archen-pokemon.gif?GoogleAccessId=firebase-adminsdk-fbsvc%40pokemon-27d43.iam.gserviceaccount.com&Expires=16730319600&Signature=Hs09zJ2GVH3ikeCQfa2cJN4lUQFQ3dIOcny%2FAwoS7IBHDWlbBo2OH%2F67ZMWqZrJaX89XhGw4p3nN4Ar2RNKg%2Bk%2BCtx%2F0m7fR92uQnaKetgeoNIvmVqqXQRJQo%2Fgc6p89amVVBSbzlgcOzNab34np%2FU3TtlPRZTWzqPBjTMvVhtpyoZqtZsyRmKzf14jo3fl%2Fk8pF5LMBP3TbzCfCozNtcbF3N2SFKxccgYW%2F3xiJdMFrEtTFmFEkZKWxPZ1oJ8EXvjppbcP2wZnHdFhL%2BB5oosWbUxVCZYUPw1QlmC3hl%2FxN6khMwJk8%2BgBSY4FQSKkujnY%2BBx0kZdByVQTShyfwVA%3D%3D",
  },
];

router.get("/", (req, res) => {
  res.json(cards);
});

export default router;
