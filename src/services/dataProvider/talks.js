const talks = [
     {
         id: 1,
         title: "Chatbots Intro (Spanish)",
         description: `Este repositorio es el material para una presentación introductoria al desarrollo de Chatbots con Python.

Este repositorio contiene una página web que se usa como presentación y está disponible en Github Pages

Video

Se presentan adicionalmente 3 carpetas extra, cada una con el código fuente de una aproximación mencionada en la presencación.

basado_en_reglas contiene un archivo único en python que ejemplifica una manera sencilla de utilizar condicionales anidados para generar reglas de resolución de intenciones.
kaggle es un enlace al repositorio de WendyKan donde se ejemplifica como utilizar una cantidad grande de datos anotados para clasificar una opinión. -rasa por último en rasa encontraremos el código necesario para ejecutar el ejemplo visto en clase. Este último código tiene algunas dependencias externas, las cuales son MITIE y MITIE-models-v0.2-Spanish.zip, los cuales deben ser añadidos al archivo de configuración después de descomprimirlos.
Cualquier observación, inquietud o pregunta puede ser remitida a este correo`,
         url: "https://github.com/contraslash/chatbots-intro",
         date: "2017-10-02"
     },
     {
         id: 2,
         title: "Con la ballena a la nube (Spanish)",
         description: `Presentación sobre el despliegue de aplicaciones en python utilizando contenedores Docker

Se prepara para el Meetup Python Cali

Contenido de la presentación:

- Conceptos teóricos sobre contenedores
- Alternativas a Docker
- Arquitectura de Docker
- Facilidades para usar Docker
- Instalación de Docker Machine
- Despliegue de aplicaciones sobre Docker Machine

En ejemplo-django existe una aplicación sencilla en Django, que cuenta con un ejemplo de Dockerfile necesario para crear una imagen de Docker y luego subirla al Registro de Docker`,
         url: "https://github.com/contraslash/con-la-ballena-a-la-nube",
         date: "2018-04-02"
     },
     {
         id: 3,
         title: "Python Serverless (Spanish)",
         description: `
Los contenedores revolucionaron al mundo desde su popularización con 
[docker](https://docker.io). La manera como cambian la manera del desarrollo 
de software y apoyan [arquitecturas orientadas a servicios](https://es.wikipedia.org/wiki/Arquitectura_orientada_a_servicios), 
[devops](https://es.wikipedia.org/wiki/DevOps), 
[auto escalamiento](https://en.wikipedia.org/wiki/Autoscaling) y otros conceptos 
hacen que sea una tecnología requerida para todos los desarrolladores y 
administradores de sistemas.

A pesar de la homogeneidad de los contenedores y todas sus ventajas, para casos 
específicos, como apis calientes parecen comportarse de manera similar a un 
servidor físico.

Serverless nace para optimizar los computacionales relacionados con el proceso 
en la nube reduciendo los costos de funcionamiento y permitiendo el escalamiento 
rápido y eficiente sin que los tiempos de respuesta se vean afectados.

El concepto de serverless  incluye delegar nuestro producto a terceros que puedan 
manejar eficientemente cada segmento de la aplicación, como el alojamiento de 
contenido estático, la autenticación, las bases de datos, las funciones de 
proceso y el enrutamiento a dichas funciones. De una manera sencilla, es hacer 
que un proveedor de nube se vuelva nuestro framework de desarrollo.

En la charla hablaremos un poco de que es serverless, su profunda relación con 
el concepto de Functions as a Service, algunas consideraciones arquitecturales 
para serverless, como conceptos claves de microservicios se adaptan de igual 
manera al serverless, y ejemplos prácticos de como realizar una aplicación y 
desplegarla en AWS usando chalice y zappa

Enlaces útiles

- [Serverles !=  FaaS](https://thenewstack.io/add-it-up-serverless-faas/)
- [Serverless is more than FaaS](https://medium.com/@PaulDJohnston/serverless-its-much-much-more-than-faas-a342541b982e)
- [What you need to know about serverless](https://medium.com/stacks-on-stacks/what-successful-serverless-teams-know-fb5629c4358f)
- [Common errors with serverless](https://medium.com/stacks-on-stacks/serverless-secrets-the-three-things-teams-get-wrong-9fa0410f6e06)
- [Challenges with serverless](https://medium.com/stacks-on-stacks/the-serverless-learning-curve-74e40d3be85c)
- [Definición de Serverless Martin Fowler](https://martinfowler.com/articles/serverless.html)
- [Confussion in the age of Serverless](https://www.youtube.com/watch?v=Y6B3Eqlj9Fw)
- [From flask to serverless](https://www.spantree.net/blog/2018/09/04/from-flask-to-serverless.html)
- [Serverless Python PyOhio](https://www.youtube.com/watch?v=mijpESCucRQ)`,
         url: "https://github.com/contraslash/con-la-ballena-a-la-nube",
         date: "2018-04-02"
     },
     {
         id: 4,
         title: "Automatizando el hogar con Python Raspberry PI y Reconocimiento de voz (Spanish)",
         description: `Amazon Echo marcó un hito gigante en la percepción de la tecnología. Si bien el reconocimiento de voz es algo presente en la investigación por mas de 60 años, la brecha entre el lenguaje natural hablado y el entendido por un ordenador se cerró abruptamente en la última década. Las búsquedas por voz de Google ya eran posibles desde hace algún tiempo, pero un dispositivo listo para usuario final con características de personalización e integración con dispositivos en el mercado causó gran impacto en la población estado unidense tanto que tan solo en 2017 se vendieron mas de 20 millones de dispositivos. Otras alternativas como Google Home, Apple HomePod, Sonos o Mycroft cerran la brecha mas y mas haciendo que el control domótico del hogar sea una labor trivial.

Pero no podemos creer que debemos usar una alternativa privada para realizar el control de nuestro hogar, pues alternativas de hardware libre y software libre combinadas nos permiten lograr los mismos resultados con un poco de esfuerzo y mucha mas satisfacción.

Con un Raspberry PI y un micrófono USB podremos lograr lo mismo e incluso más que las alternativas del mercado (aunque podremos lograr los mismos resultados con un BeagleBoard, un BananaPi o cualquier otra plataforma de bajo costo que nos permita ejecutar linux y nos deje algo de memoria RAM disponible, aunque recomiendo 1GB de RAM, si eres un auténtico ninja podrás reducir los servicios del sistema operativo y tener todo funcionando en configuraciones inpensables) claro, si aún no tienes tu dispositivo puedes hacerlo todo en tu computador personal sin ningún problema.

En este corto taller exploraremos un poco la teoría detrás de la magia del reconocimiento automático de la voz (Automatic Speech Recognition ASR), las metodologías tradicionales basadas en Modelos de Markov Ocultas y Modelos de Mixturas Gausianas (Hidden Markov Models - Gaussian Mixture Models HMM-GMM), aproximaciones hibridas utilizando Modelos de Markov Ocultos en Redes Neuronales Profundas Dependientes de Contexto (Context Dependent Deep Neural Networks Hidden Markov Models CD-DNN-HMM) y por qué no un poco de Redes Neuronales Profundas (Deep Neural Networks DNN).

Pero tranquilo, si aún no eres un ninja en aprendizaje profundo existen herramientas listas para usar que nos darán las funcionalidades necesarias a un apt de distancia.

Dejando la teoría y permitiendo que nuestro cerebro respire un poco, trabajaremos con pocketsphinx, rasaNLU y GPIO usando scripts para enviar señales a nuestros dispositivos físicos y hacer magia.`,
         url: "https://github.com/contraslash/automatizacion-hogar-raspberry-python",
         date: "2019-02-13"
     },
     {
         id: 5,
         title: "Una guía rápida de Docker (Spanish)",
         description: "Charla del post [Una guía rápida de Docker](https://medium.com/contraslashsas/una-gu%C3%ADa-no-tan-r%C3%A1pida-de-docker-2fab9243762a)",
         url: "https://github.com/contraslash/una-guia-rapida-de-docker",
         date: "2019-04-26"
     },
     {
         id: 6,
         title: "CI/CD con Github Actions (Spanish)",
         description: `Diapositivas para la presentación de integración, entrega y despliegue continuos usando Github Actions.

Se toma como referencia [este post](https://medium.com/contraslashsas/integraci%C3%B3n-entrega-y-despliegue-cont%C3%ADnuo-con-github-actions-f49001e49541)`,
         url: "https://github.com/contraslash/ci-cd-github-actions",
         date: "2019-04-26"
     },
     {
         id: 7,
         title: "Hablemos de voz (Spanish)",
         description: `Desde que creamos los ordenadores nos hemos preguntado si serán inteligentes, Alan Turing en la prueba que lleva su nombre describió inteligencia como la capacidad de mantener una "conversación" con un agente y que sea indiferenciado con un humano. ¡Y la mayoría de seres humanos nos comunicamos hablando!

Desde los años 60, en los laboratorios de IBM y AT&T prototipos capaces de reconocer palabras han sido desarrollados y ochenta años después, los reconocedores automáticos de voz hacen parte de nuestra vida: Google Assistant, Siri, Alexa, Cortana y muchos otros.

En esta charla vamos a hablar de voz, desde lo teórico hasta lo práctico, entendiendo como esta señal de audio es muy característica dependiendo de nuestro cuerpo y nuestro idioma, como extraemos características y generamos modelos para predecir y producir voz, desde casi cero y con Python puro y duro`,
         url: "https://github.com/contraslash/hablemos-de-voz",
         date: "2020-02-07"
     },
 ];

 export default talks;
