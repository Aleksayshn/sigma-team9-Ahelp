import { Dialog } from '@headlessui/react';

export default function MyModal({ isModalOpen, setModalState }) {
  return (
    <>
      <div className="current-needs-myModal">
        <Dialog open={isModalOpen} onClose={() => setModalState(false, 0)}>
          <div className="myModal__bg">
            <Dialog.Panel className="form-popap">
              <button
                className="myModal__popap_close__position"
                onClick={() => setModalState(false, 0)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7L17 17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 7L7 17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="privacy-policy">
                <div className="privacy-policy__wrapper">
                <h2>Політика конфіденційності</h2>
                <p>
                  Дана Політика конфіденційності (далі за текстом – «Політика») регулює відносини у
                  сфері захисту персональних даних відвідувачів веб-сайту<br/>
                  <a href="www.a-help.com.ua">www.a-help.com.ua</a> (далі за текстом – «Веб-сайт»),
                  який належить Благодійній організації «Благодійний фонд „А-ХЕЛП УКРАЇНА“» (код
                  ЄДРПОУ 44773154, адреса місцезнаходження: Україна, 61121, Харківська обл., місто
                  Харків, вул. Валентинівська, будинок 58А, квартира 333, 334 (далі за текстом –
                  «Фонд»).
                </p>
                <h4>1.ЗАГАЛЬНІ ПОЛОЖЕННЯ</h4>
                <section>
                  1.1. В даній Політиці терміни вживаються у наступному значенні: • база
                  персональних даних - іменована сукупність упорядкованих персональних даних в
                  електронній формі та/або у формі картотек персональних даних; • згода суб’єкта
                  персональних даних - добровільне волевиявлення фізичної особи (за умови її
                  поінформованості) щодо надання дозволу на обробку її персональних даних відповідно
                  до сформульованої мети їх обробки, висловлене у формі, що дає змогу зробити
                  висновок про надання згоди; • обробка персональних даних - будь-яка дія або
                  сукупність дій, таких як збирання, реєстрація, накопичення, зберігання,
                  адаптування, зміна, поновлення, використання і поширення (розповсюдження,
                  реалізація, передача), знеособлення, знищення персональних даних, у тому числі з
                  використанням інформаційних (автоматизованих) систем; • персональні дані -
                  відомості чи сукупність відомостей про фізичну особу, яка ідентифікована або може
                  бути конкретно ідентифікована; • суб’єкт персональних даних - фізична особа,
                  персональні дані якої обробляються; • третя особа - будь-яка особа, за винятком
                  суб’єкта персональних даних, володільця чи розпорядника персональних даних; всі
                  інші терміни в Політиці вживаються у значенні, визначеному чинним законодавством
                  України, включаючи ратифіковані в Україні міжнародні нормативно-правові акти. 1.2.
                  Дана Політика розроблена з метою інформування суб’єктів персональних даних про
                  порядок обробки їх персональних даних під час відвідування/користування
                  Веб-сайтом, а також з метою забезпечення захисту їх персональних даних під час
                  такої обробки. 1.3. Дана Політика, а також діяльність Фонду, пов’язана із
                  збиранням, обробкою, зберіганням та іншими правомірними діями щодо персональних
                  даних, регулюється: • Конституцією України; • Законом України «Про захист
                  персональних даних» від 01.06.2010 р. №2287-VI; • іншими чинними
                  нормативно-правовими актами України, які регулюють питання захисту персональних
                  даних; • ратифікованими в України міжнародними нормативно-правовими актами. До
                  правовідносин, які виникають у Фонду у зв’язку з обробкою персональних даних
                  резидентів іноземних юрисдикцій, також застосовується право (в тому числі
                  міжнародне), національні та міжнародні нормативноправові акти, що регулюють
                  питання захисту персональних даних резидентів таких країн. 1.4. Володільцем
                  персональних даних, які обробляються у зв’язку з відвідуванням/використанням опцій
                  Веб-сайту є Фонд. Фонд має право доручити повністю або частково обробку
                  персональних даних третім особам на підставі договору, укладеного відповідно до
                  вимог чинного законодавства. 1.5. Фізична особа є суб’єктом персональних даних за
                  даною Політикою, якщо вона є відвідувачем Вебсайту, в т.ч. якщо вона використовує
                  будь-які опції, доступні на Веб-сайті. 1.6. Фонд гарантує, що: • дотримується
                  належної практики та нормативних вимог щодо захисту персональних даних; • захищає
                  права суб’єктів персональних даних; • запобігає ризику порушення безпеки обробки
                  персональних даних. 1.7. Метою обробки персональних даних, отриманих в процесі
                  функціонування Веб-сайту, є здійснення Фонду своєї статутної діяльності. 1.8.
                  Розміщення даної Політики за посиланням, вказаним в п. 4.1. цієї Політики, є
                  повідомленням суб’єктів персональних даних про Володільця, склад та зміст
                  персональних даних, що збираються у зв’язку з відвідуванням/використанням
                  Веб-сайту, про права таких суб’єктів, мету збору їх персональних даних та третіх
                  осіб, яким можуть передаватись такі персональні дані.
                </section>
                <h4>2. ОБРОБКА ПЕРСОНАЛЬНИХ ДАНИХ</h4>
                <section>
                  2.1. Фонд може збирати та обробляти наступну інформацію про Вас: • Інформація, яку
                  Ви надаєте Фонду: це інформація про Вас, яку Ви надаєте шляхом: використання
                  Вебсайту та опцій Веб-сайту, надання благодійної допомоги (пожертви) за допомогою
                  опцій Веб-сайту, комунікації з Фондом через опції, доступні на Веб-сайті, тощо. •
                  Інформація про Вас, яка збирається Веб-сайтом та іншими системами: 1) якщо Ви
                  відвідуєте Веб-сайт, треті особи можуть збирати певну інформацію про Вас та Ваше
                  відвідування, так як тип та версія Вашого браузера, а також сторінки на Веб-сайті,
                  які Ви відвідуєте, адресу інтернет-протоколу (ІР); 2) якщо Ви контактуєте із
                  співробітниками Фонду за допомогою Веб-сайту або інших засобів електронного
                  зв’язку. • Інформація, яку збирають треті особи про Вас на Веб-сайті шляхом
                  виконання дій: це інформація про Вас, яку Ви надаєте третім особам (наприклад,
                  Facebook, Google, Twitter), використовуючи опції для обміну в соціальних мережах,
                  доступні на Веб-сайті, при переходів з однієї сторінки на іншу або шляхом
                  перегляду матеріалів, що мають посилання (відкриваються) на інші платформи
                  (веб-сайти). 2.2. Те, яким чином Фонд обробляє Ваші персональні дані, залежить від
                  того, як ви використовуєте Веб-сайт та взаємодієте з ним. Частина інформації може
                  надаватись безпосередньо Вами під час використання Вебсайту або в інший спосіб;
                  іншу інформацію Фонд може збирати та обробляти самостійно за допомогою
                  автоматизованих технологій, що використовуються на Веб-сайті. 2.3. Правові
                  підстави обробки даних: при відвідуванні Веб-сайту Фонд обробляє ваші персональні
                  дані, якщо 1) Фонд отримав вашу згоду на таку обробку, 2) в інших випадках,
                  визначених чинним законодавством. У деяких випадках Фонд може мати юридичне
                  зобов’язання обробляти ваші персональні дані або оброблятиме ваші персональні дані
                  для формування, здійснення або захисту правових претензій. 2.4. Механізми
                  автоматизованої обробки: Фонд та треті особи можуть використовувати технології
                  автоматизованої обробки інформації для обробки інформації в деяких розділах
                  Веб-сайту. Фонд може використовувати файли cookie для зберігання контенту та
                  налаштувань, що дозволяє Фонду обробляти стандартну інформацію, яку ваш браузер
                  надсилає певним веб-сайтам, які ви відвідуєте, наприклад, вашу IP-адресу, тип і
                  мову браузера, а також сайт, з якого ви перейшли, сторінки, які ви відвідуєте і
                  посилання, на які ви натискаєте на Веб-сайті. Наявність такої технічної інформації
                  допомагає Фонду покращувати Веб-сайт. 2.5. Фонд може використовувати Ваші
                  персональні дані лише з метою та в цілях, визначених цією Політикою та чинним
                  законодавством, зокрема (але не обмежуючись), 1) з метою обробки Вашого запиту
                  (звернення) до Фонду, вчиненого за допомогою Веб-сайту, 2) з метою забезпечення
                  надання Вами благодійної допомоги (пожертви) за допомогою опцій, доступних на
                  Веб-сайті, 3) з метою реалізації інших статутних цілей Фонду в порядку,
                  визначеному чинним законодавством. 2.6. Фонд може накопичувати персональні дані,
                  оброблені в процесі відвідування/використання Вами Вебсайту, в тому числі шляхом
                  внесення цих даних до бази персональних даних. Зберігання Ваших персональних даних
                  здійснюється із дотриманням вимог чинного законодавства в сфері персональних
                  даних. 2.7. Поширення Ваших персональних даних здійснюється виключно за Вашою
                  згодою або у випадках, визначених цією Політикою та чинним законодавством. 2.8.
                  Ваші персональні дані підлягають видаленню або знищенню у разі: • закінчення
                  2-річного строку їх зберігання або іншого строку, визначеного чинним
                  законодавством; • припинення правовідносин між суб’єктом персональних даних та
                  Фондом, якщо інше передбачено законодавством; • в інших випадках, визначених
                  чинним законодавством в сфері захисту персональних даних. 2.9. Фонд не здійснює
                  обробку персональних даних про расове або етнічне походження, політичні, релігійні
                  або світоглядні переконання, членство в політичних партіях та професійних спілках,
                  засудження до кримінального покарання, а також даних, що стосуються здоров’я,
                  статевого життя, біометричних або генетичних даних, окрім випадків, визначених
                  законодавством.
                </section>
                <h4>4. ЗМІНИ ПОЛІТИКИ КОНФІДЕНЦІЙНОСТІ</h4>
                <section>
                  4.1. Фонд залишає за собою право переглядати та змінювати положення даної
                  Політики. Актуальна редакція цієї Політики розміщена на Веб-сайті за посиланням:
                  __________________.
                </section>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </>
  );
}