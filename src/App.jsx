import { useState } from 'react'
import Card from './contener/card'


import './App.css'
import img1 from './assets/img1.png'
import img2 from './assets/img1 (1).png'
import img3 from './assets/img1 (2).png'
import img4 from './assets/img1 (4).png'
import img5 from './assets/img1 (3).png'
import img6 from './assets/img1 (5).png'
import img7 from './assets/img1 (6).png'
import img8 from './assets/img1 (7).png'
import img9 from './assets/img1 (8).png'
import img10 from './assets/img1 (9).png'
import img11 from './assets/img1 (10).png'
import img12 from './assets/img1 (11).png'
import img13 from './assets/img1 (12).png'
import img14 from './assets/img1 (13).png'
import img15 from './assets/img1 (14).png'
import img16 from './assets/img1 (15).png'
import img17 from './assets/img1 (16).png'

function App() {


  return (
    <div>
      <header>
        <div className='absolute z-10 text-center mt-[300px]  lg:mt-[400px] lg:ml-[25%]  text-white'>
          <p className='font-extrabold text-5xl'>Полет на <span className='text-[#FE9A4C]'>Lujo BlackJet</span> </p>
          <p>Новейший самолёт, оборудованный 72 креслами  <br />только бизнес-класса</p>
        </div>

        <img src={img1} alt="" className='w-[100%] h-[90vh]' />
      </header>
      <div>
        <div className='lg:w-[60%] lg:ml-[18%] mx-[20px] my-[30px]'>
          <h1 className='text-3xl'>Lujo BlackJet доставляет путешественников в <span className='font-black'>Турцию</span> и на <span className='font-black'>Мальдивы:</span> </h1>
        </div>
        <div className='lg:w-[65%] w-[90%] mx-auto'>
          <img src={img3} alt="" />
          <div className='my-[30px]'>
            <p>Рейсы проходят по маршруту Москва — Бодрум, аэропорт Milas Bodrum. <br />
              Максимальная частота вылетов в летний сезон — 5 раз в неделю.</p>
            <li>Вылет — <span className='font-bold'>09:00</span></li>
            <li>Прибытие в <span className='font-bold'> Бодрум — 14:35</span></li>
            <li>Обратный вылет в<span className='font-bold'>  Москву — 16:10 </span></li>
            <li>Возвращение в <span className='font-bold'>  столицу — 21:20 </span></li>
          </div>
        </div>
        <div className='lg:w-[65%] w-[90%] mx-auto'>
          <img src={img2} alt="" />
          <div className='my-[30px]'>
            <p>РПолётная программа включает вылеты 2 раза в неделю, по средам и пятницам.</p>
            <li>Вылет — <span className='font-bold'>00:15</span></li>
            <li>Прибытие в <span className='font-bold'> Бодрум — 14:35</span></li>
            <li>Обратный вылет в<span className='font-bold'>  Москву — 16:10 </span></li>
            <li>Возвращение в <span className='font-bold'>  столицу — 21:20 </span></li>
          </div>
        </div>
        <div>
          <p className='text-2xl lg:w-[43%] lg:ml-[17%] mx-[15px] my-[30px]'> <span className='font-black'>Lujo BlackJet</span> — cтоит один раз оказаться в небе
            на борту уникального лайнера, и вам не захочется соглашаться на другие варианты. </p>
          <div className='lg:flex justify-around mx-auto w-[70%] gap-[200px] items-center'>
            <div>
              <p> <span className='font-extrabold lg:text-6xl text-3xl bg1'>7250</span>км</p>
            </div>
            <div className='lg:w-[35%]'>
              <p> <span className='font-black'>дальность полета</span> - что позволяет долететь до желаемого пункта назначения без пересадок</p>
            </div>
          </div>
          <hr className='mx-[15%]' />
          <div className='w-[70%] my-[40px] mx-auto'>
            <p>Это Boeing 757−200, единственный в России самолёт, в котором нет экономического и бизнес-класса, только 72 места <br />
              бизнес-класса. <br /><br />

              Точнее — Ultimate Business Class. А это значит, что вас ждет персональный подход, люксовые удобства и партнёрство <br />
              с мировыми брендами.</p>
          </div>
        </div>
        <div className='lg:flex grid grid-cols-2 gap-[20px] lg:mx-[0px] mx-[10px] my-[40px] justify-around'>
          <div className='lg:w-[18%] h-[200px] rounded-2xl lg:p-[30px] p-[20px] text-center border border-[#6091B1] bg-[#F0F9FF]'>
            <p className='font-extrabold text-5xl lg:my-[20px] text-[#6091B1]'>72</p>
            <p className='text-[#6091B1]'>кресла только
              бизнес-класса</p>
          </div>
          <div className='lg:w-[18%] h-[200px] rounded-2xl lg:p-[30px] p-[20px] text-center border border-[#6091B1] bg-[#F0F9FF]'>
            <p className='font-extrabold text-5xl lg:my-[20px] text-[#6091B1]'>850</p>
            <p className='text-[#6091B1]'>км/ч  - Средняя крейсерская скорость</p>
          </div>
          <div className='lg:w-[18%] h-[200px] rounded-2xl lg:p-[30px] p-[20px] text-center border border-[#6091B1] bg-[#F0F9FF]'>
            <p className='font-extrabold text-5xl lg:my-[20px] text-[#6091B1]'>18</p>
            <p className='text-[#6091B1]'>видов горячих и холодных блюд</p>
          </div>
          <div className='lg:w-[18%] h-[200px] rounded-2xl lg:p-[30px] p-[20px] text-center border border-[#6091B1] bg-[#F0F9FF]'>
            <p className='font-extrabold text-5xl lg:my-[20px] text-[#6091B1]'>5</p>
            <p className='text-[#6091B1]'>бортпроводников - по 1 на 14 пассажиров</p>
          </div>
        </div>
      </div>
      <div>
        <div className='w-[80%] mx-auto'>
          <img src={img4} alt="" />
        </div>
        <div className='bg-[#3E403B] text-white '>
          <img src={img5} alt="" className='absolute z-10 lg:ml-[250px] ml-[20px] lg:w-[50%] w-[70%]' />
          <div className='lg:w-[70%] mx-[20px]  lg:mx-auto'>
            <div className='absolute z-20 '>
              <p className='font-black text-3xl pt-[50px] mb-[50px]'>Здесь Moët & Chandon, гаджеты Apple <br />
                и косметические travel-наборы от Bvlgari.</p>
            </div>
            <p className='lg:pt-[200px] pt-[300px] text-[#8C8F87]'>Все кресла раскладываются в полноценное место для сна с помощью одного нажатия на панель управления, а также откидываются и фиксируются в положении для отдыха.
              Каждое сиденье оборудовано компактными лампами для чтения, розетками и USB, а также функцией массажа. Вам обязательно предложат мягкое одеяло, подушку под шею и голову, тапочки и маску для сна для комфортного отдыха. <br /><br />


              Мультимедийная система развлечений доступна на протяжении всего полёта. Фильмы, стендап-шоу, сериалы из коллекции Premier, мультфильмы для детей — выбирайте на свой вкус.
              На протяжении всего полета в вашем распоряжении планшеты iPad самой последней модели, а также наушники AirPods Max с активным шумоподавлением.</p>
          </div>
          <div className='lg:w-[70%] py-[50px] lg:mx-auto lg:flex  mx-[20px] items-center gap-[50px] '>
            <div className='lg:w-[20%] w-[100%]'>
              <img src={img7} alt="" />
            </div>
            <div>
              <p className='font-black'>Комфортный отдых</p>
              <p>Lujo BlackJet — это Boeing 757−200, оборудованный 72 креслами только бизнес-класса. Все сиденья раскладываются в полноценные места для сна, оснащены лампами для чтения, розетками и USB для гаджетов. Расслабиться помогут одеяла и мягкие подушки.</p>
              <select className='w-[200px] p-[10px] border border-[#FE9A4C] rounded-2xl my-[20px]'>
                <option value="">Подробнее</option>
              </select>
            </div>
          </div>
          <hr className='lg:mx-[15%] mx-[20px]' />
          <div className='lg:w-[70%] py-[50px] lg:mx-auto lg:flex mx-[20px]  items-center gap-[50px] '>
            <div>
              <img src={img6} alt="" />
            </div>
            <div>
              <p className='font-black'>Современные гаджеты</p>
              <p>Для пассажиров Lujo BlackJet — система мультимедийных развлечений на борту, планшеты iPad самой последней модели и наушники AirPods Max.</p>
              <select className='w-[200px] p-[10px] border rounded-2xl my-[20px]'>
                <option value="">Свернуть</option>
              </select>
            </div>
          </div>
          <div className='lg:w-[70%] mx-[20px] lg:mx-auto text-[#8C8F87]'>
            <p>Мультимедийная система развлечений доступна на протяжении всего полёта. Смотрите фильмы, стендап-шоу, сериалы из коллекции Premier, мультфильмы для детей — всё, что вам захочется. <br /><br />

              Гаджеты на борту — это планшеты iPad самой последней модели. А также наушники AirPods Max с активным
              шумоподавлением — с ними комфортный отдых и ощущение уединения в полёте обеспечены.</p>
          </div>
          <div className='lg:w-[70%] lg:mx-auto mx-[20px] mt-[30px] p-[10px] bg-[#FFFFFF1A] rounded-2xl flex gap-7'>
            <img src={img8} alt="" />
            <p>my-app/src/assets/Union.png</p>
          </div>
          <div className='lg:w-[70%] lg:mx-auto mx-[20px] mb-[30px] p-[10px] bg-[#FFFFFF1A] rounded-2xl flex gap-7'>
            <img src={img8} alt="" />
            <p>my-app/src/assets/Union.png</p>
          </div>
          <hr className='lg:mx-[15%] mx-[10px]' />
          <div className='lg:w-[70%] py-[50px] lg:mx-auto lg:flex mx-[20px]  items-center gap-[50px] '>
            <div className='w-[20%]'>
              <img src={img9} alt="" />
            </div>
            <div>
              <p className='font-black'>Забота о себе</p>
              <p>Комплимент каждому гостю — косметичка от Bvlgari. В дорожный набор входят влажные салфетки, парфюм, лосьон для кожи и бальзам для губ. Приятное напоминание о прошедшем путешествии!</p>
              <select className='w-[200px] p-[10px] border border-[#FE9A4C] rounded-2xl my-[20px]'>
                <option value="">Подробнее</option>
              </select>
            </div>
          </div>
          <hr className='lg:mx-[15%] mx-[10px]' />
          <div className='lg:w-[70%] py-[50px] lg:mx-auto lg:flex mx-[20px] items-center gap-[50px] '>
            <div className='w-[30%]'>
              <img src={img10} alt="" />
            </div>
            <div>
              <p className='font-black'>Специальное меню от поваров lujo</p>
              <p>За питание на борту отвечает шеф-повар. Для гостей готовят блюда ресторанного уровня из свежайших продуктов. Дополняют меню алкогольные и безалкогольные напитки премиум-класса, десерты и деликатесы, специальные блюда для детей и вегетарианцев.</p>
              <select className='w-[200px] p-[10px] border border-[#FE9A4C] rounded-2xl my-[20px]'>
                <option value="">Подробнее</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='font-black text-3xl w-[70%] mx-auto my-[40px]'>Меню на борту Lujo BlackJet</h1>
        <div className='lg:flex justify-around lg:w-[70%] mx-auto items-center'>
          <div className='lg:w-[45%] hidden lg:block m-[20px] lg:m-0 text-3xl'>
            <select className='w-[100%] border-b my-[10px]'>
              <option value="">Завтрак</option>
            </select>
            <select className='w-[100%] border-b my-[10px]'>
              <option value="">Обед</option>
            </select>
            <select className='w-[100%] border-b my-[10px]'>
              <option value="">Детское меню</option>
            </select>
            <select className='w-[100%] border-b my-[10px]'>
              <option value="">Вегетарианское меню</option>
            </select>
            <select className='w-[100%] border-b my-[10px]'>
              <option value="">Барное меню Lujo BlackJet</option>
            </select>
          </div>
          <div className='lg:w-[50%] mx-[20px]'>
            <img src={img11} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className='lg:w-[70%] mx-[20px] font-black text-3xl lg:mx-auto my-[30px]'>Регистрация и ожидание полёта</h1>
        <div className='lg:w-[70%] lg:flex mx-[20px] items-center justify-around lg:mx-auto my-[50px]'>
          <div>
            <img src={img13} alt="" />
          </div>
          <div className='lg:w-[45%] my-[20px]'>
            <p>Полёт на бизнес-джете — минимум спешки и ожиданий, максимум привилегий и бережного отношения к вашему времени. Регистрация на борт происходит на отдельных стойках 101 и 102, так что в аэропорт Внуково можно прибыть всего за 1,5 часа до вылета.После регистрации и сдачи багажа гостей ждёт отдых в бизнес-лаундже ART Lounge: шведский стол с закусками, напитки, Wi-Fi, душ, <br /><br /> детский уголок, зона с массажными креслами, камера хранения для ручной клади и другие удобства.При вылете из Бодрума лаундж также к вашим услугам — при входе в зону отдыха нужно лишь показать посадочный талон.</p>
          </div>
        </div>
        <h1 className='w-[70%] font-black text-3xl mx-auto my-[30px]'>Трансфер</h1>
        <div className='lg:w-[70%] lg:flex mx-[20px] items-center justify-around lg:mx-auto my-[50px]'>
          <div className='lg:w-[45%]'>
            <p>Тип трансфера зависит от отеля, в котором вы планируете остановиться.</p>
            <div className='w-[95%] my-[20px] flex gap-[20px]'>
              <h1 className='border text-amber-600'></h1>
              <p>Для гостей Lujo Bodrum в стоимость тура включён индивидуальный трансфер аэропорт—отель—аэропорт. В зависимости от числа путешественников используются автомобили Mercedes Sprinter, Mercedes Vito.</p>
            </div>
            <div className='w-[95%] my-[20px] flex gap-[20px]'>
              <h1 className='border text-amber-600'></h1>
              <p>Для гостей Lujo Bodrum в стоимость тура включён индивидуальный трансфер аэропорт—отель—аэропорт. В зависимости от числа путешественников используются автомобили Mercedes Sprinter, Mercedes Vito.</p>
            </div>
            <div className='w-[100%] hidden lg:block text-3xl'>
              <select className='lg:w-[100%] w-[90%] border-b my-[10px]'>
                <option value="">Индивидуальный трансфер</option>
              </select>
              <select className='lg:w-[100%] w-[90%] border-b my-[10px]'>
                <option value="">Эксклюзивный трансфер</option>
              </select>
            </div>
          </div>
          <div>
            <img src={img14} alt="" />
          </div>
        </div>
        <h1 className='w-[70%] font-black text-3xl mx-auto my-[30px]'>Можно на борт Lujo BlackJet с животными?</h1>
        <div className='lg:w-[70%] mx-[20px] lg:flex items-center justify-around lg:mx-auto my-[50px]'>
          <div>
            <img src={img12} alt="" />
          </div>
          <div className='lg:w-[55%] my-[20px]'>
            <p>Да, на борту Lujo BlackJet рады гостям с питомцами — важно лишь знать о нескольких правилах.</p>
            <div className='w-[95%] my-[20px] flex gap-[20px]'>
              <h1 className='border text-amber-600'></h1>
              <p>Питомцы массой до 8 кг с учётом веса переноски летят в салоне. Максимальные габариты последней — не более 115 см в трёх измерениях.</p>
            </div>
            <div className='w-[95%] my-[20px] flex gap-[20px]'>
              <h1 className='border text-amber-600'></h1>
              <p>Питомцы массой до 8 кг с учётом веса переноски летят в салоне. Максимальные габариты последней — не более 115 см в трёх измерениях.</p>
            </div>
            <div>
              <p>В любом случае клетка должна быть достаточных для вашего любимца размеров, обеспечивать ему комфортное расположение и доступ воздуха. Убедитесь, что переноска имеет ручки, а водонепроницаемое дно покрыто абсорбирующим материалом.</p>
            </div>
          </div>
        </div>
        <div className='lg:w-[70%] mx-[20px] lg:mx-auto'>
          <p className='font-black text-2xl'>Другие детали:</p>
          <li>перевозка животных согласовывается с авиакомпанией заранее;</li>
          <li>услуга платная, актуальные цены указаны на сайте перевозчика;</li>
          <li>важно, чтобы страна въезда, выезда, транзита разрешала ввоз животных;</li>
          <li>необходимы документы для животного и сертификаты о его здоровье;</li>
          <li>в аэропорту пассажиру нужно будет пройти ветеринарный контроль.</li>
        </div>
      </div>
      <Card />
      <div className=' bg-[#3E403B] text-white mt-[50px]'>
        <div className='lg:w-[70%] lg:mx-auto mx-[20px] py-[50px]'>
          <p className='font-extrabold text-4xl my-[20px] lg:w-[50%]'>Лёгкий способ
            осуществить мечту</p>
          <p>Заполните форму обратной связи, напишите ваши контакты и пожелания к туру.
            Мы свяжемся с вами в ближайшее время!</p>
          <div>
            <label htmlFor="" className='text-[#FE9A4C]'>Имя</label> <br />
            <input className='border w-[100%] p-[10px] rounded-2xl' type="text" placeholder='Как к вам обращаться?' /> <br /><br />
            <label htmlFor="" className='text-[#FE9A4C]'>Телефон</label> <br />
            <input className='border w-[100%] p-[10px] rounded-2xl' type="text" placeholder='+7 (xxx) xxx-xx-xx' /> <br /><br />
            <label htmlFor="" className='text-[#FE9A4C]'>Ваши пожелания</label><br />
            <textarea
              id="wishes"
              placeholder="Опишите ваше идеальное путешествие"
              class=" w-full p-4 rounded-md  text-gray-200 border border-gray-600  "
            ></textarea>
            <button className='w-[200px] rounded-[5px] text-white bg-amber-500 p-[10px] my-[20px]'>Отправить</button>
            <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
          </div>
        </div>
      </div>
      <footer className='lg:flex lg:w-[70%] mx-[20px] lg:mx-auto justify-around items-center mt-[50px]'>
        <div>
          <img src={img17} alt="" />
          <div className='flex justify-around gap-[20px]'>
            <div>
              <p className='lg:text-3xl text-blue-300'>Информация</p> <br /><br />
              <p>Контакты</p> <br />
              <p>О компании</p> <br />
              <p>Наши новости</p> <br />
              <p>Клиентам</p> <br />
              <p>Сервис</p> <br />
              <p>Отзывы</p>
            </div>
            <div>
              <p className='lg:text-3xl text-blue-300'>Контакты</p><br /><br />
              <img src={img16} alt="" /> <br />
              <p>+ 7 (495) 374 77 88</p>
              <p>Москва, Лесная 8а <br />
                (м. Белорусская)</p> <br />
              <p>Парковка для клиентов <br /> турагентства "Бутик <br /> Путешествий"</p>
            </div>
          </div>
        </div>
        <div>
          <img src={img15} alt="" />
        </div>
      </footer>
    </div>
  )
}

export default App
