import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Открой свой природный голос
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Раскрой силу своего голоса и обрети уверенность в общении через профессиональные голосовые практики
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                  Записаться на консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d3655fe6-9f81-4b8f-9007-4d19323cef07/files/bac0c5aa-e26b-4377-80d0-bbe51228274c.jpg" 
                alt="Голосовые практики" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Преимущества раскрытия голоса
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Mic2",
                title: "Уверенность в голосе",
                description: "Научитесь использовать весь потенциал вашего голоса и звучать естественно и убедительно"
              },
              {
                icon: "Heart",
                title: "Эмоциональная свобода",
                description: "Освободитесь от зажимов и блоков, мешающих выражать истинные эмоции через голос"
              },
              {
                icon: "Sparkles",
                title: "Харизма и влияние",
                description: "Развивайте харизматичное звучание, которое притягивает внимание и вдохновляет людей"
              },
              {
                icon: "Users",
                title: "Легкость в общении",
                description: "Преодолейте страх публичных выступлений и получайте удовольствие от коммуникации"
              },
              {
                icon: "Zap",
                title: "Энергия и жизненная сила",
                description: "Почувствуйте прилив энергии через дыхательные практики и вокальные упражнения"
              },
              {
                icon: "Star",
                title: "Самовыражение",
                description: "Обретите аутентичность и научитесь выражать себя полно и свободно"
              }
            ].map((benefit, idx) => (
              <Card 
                key={idx} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon name={benefit.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Программа курса
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Структурированный путь к раскрытию вашего природного голоса
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Диагностика голоса",
                description: "Определяем ваши сильные стороны и зоны роста",
                color: "from-primary to-purple-500"
              },
              {
                number: "02",
                title: "Дыхание и опора",
                description: "Осваиваем правильное дыхание для сильного голоса",
                color: "from-secondary to-pink-500"
              },
              {
                number: "03",
                title: "Резонаторы",
                description: "Развиваем объем и красоту звучания",
                color: "from-accent to-orange-500"
              },
              {
                number: "04",
                title: "Свобода голоса",
                description: "Убираем зажимы и раскрываем потенциал",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((module, idx) => (
              <Card 
                key={idx} 
                className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="p-8 relative">
                  <div className={`text-7xl font-bold bg-gradient-to-br ${module.color} bg-clip-text text-transparent mb-4 opacity-50`}>
                    {module.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground">{module.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/d3655fe6-9f81-4b8f-9007-4d19323cef07/files/3a5e24e7-8d84-407e-afe2-f8c14f69e848.jpg"
                alt="Сценическая речь"
                className="rounded-3xl shadow-2xl w-full animate-scale-in"
              />
            </div>
            <div className="order-1 md:order-2 text-white">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                Новое направление
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Сценическая речь
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Овладейте искусством театральной выразительности и актерского мастерства
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Drama", text: "Техники актёрской выразительности" },
                  { icon: "Volume2", text: "Правильная артикуляция и дикция" },
                  { icon: "Theater", text: "Работа с текстом и подтекстом" },
                  { icon: "Sparkles", text: "Эмоциональная подача материала" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} />
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6">
                Узнать подробнее
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                Популярное направление
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ораторское искусство
              </h2>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                Станьте мастером публичных выступлений и научитесь убеждать аудиторию
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Users", text: "Уверенность перед любой аудиторией" },
                  { icon: "Lightbulb", text: "Структура убедительной речи" },
                  { icon: "Target", text: "Работа с возражениями" },
                  { icon: "TrendingUp", text: "Влияние и харизма оратора" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={24} className="text-white" />
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-accent to-orange-500 text-white text-lg px-8 py-6">
                Записаться на курс
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/d3655fe6-9f81-4b8f-9007-4d19323cef07/files/6f505e51-bff3-4ca2-ba3d-6fe9ee4f2b4f.jpg"
                alt="Ораторское искусство"
                className="rounded-3xl shadow-2xl w-full animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Тарифы и цены
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Выберите подходящий формат обучения
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Базовый",
                price: "15 000",
                period: "/ месяц",
                description: "Идеально для начинающих",
                features: [
                  "8 групповых занятий",
                  "Доступ к материалам",
                  "Домашние задания",
                  "Чат поддержки"
                ],
                color: "from-primary to-purple-500",
                popular: false
              },
              {
                name: "Премиум",
                price: "35 000",
                period: "/ месяц",
                description: "Самый популярный тариф",
                features: [
                  "8 групповых занятий",
                  "4 индивидуальных урока",
                  "Видеозаписи занятий",
                  "Персональный разбор",
                  "Сертификат"
                ],
                color: "from-secondary to-pink-500",
                popular: true
              },
              {
                name: "VIP",
                price: "65 000",
                period: "/ месяц",
                description: "Максимальный результат",
                features: [
                  "12 индивидуальных уроков",
                  "Личный куратор 24/7",
                  "Разбор выступлений",
                  "Доступ ко всем курсам",
                  "Именной сертификат",
                  "Бонусные мастер-классы"
                ],
                color: "from-accent to-orange-500",
                popular: false
              }
            ].map((plan, idx) => (
              <Card 
                key={idx}
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'border-4 border-secondary shadow-2xl scale-105 md:scale-110' 
                    : 'hover:shadow-xl hover:-translate-y-2'
                } animate-fade-in`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-pink-500 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price} ₽
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    size="lg" 
                    className={`w-full text-lg py-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-secondary to-pink-500 hover:opacity-90' 
                        : `bg-gradient-to-r ${plan.color} hover:opacity-90`
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Отзывы учеников
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Мария",
                role: "Предприниматель",
                text: "После курса я стала увереннее выступать перед клиентами. Мой голос зазвучал совершенно по-новому!",
                rating: 5
              },
              {
                name: "Дмитрий",
                role: "Менеджер",
                text: "Голосовые практики помогли мне избавиться от страха публичных выступлений. Теперь презентации — это удовольствие!",
                rating: 5
              },
              {
                name: "Анна",
                role: "Психолог",
                text: "Невероятные изменения! Голос стал глубже, появилась уверенность. Клиенты заметили разницу.",
                rating: 5
              }
            ].map((review, idx) => (
              <Card 
                key={idx} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-muted-foreground">{review.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Частые вопросы
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Ответы на популярные вопросы о курсах
            </p>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Нужна ли музыкальная подготовка для занятий?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  Нет, музыкальная подготовка не требуется. Наши курсы разработаны для людей с любым уровнем подготовки. Мы начинаем с основ и постепенно развиваем ваши навыки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Как проходят занятия — онлайн или офлайн?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  Мы предлагаем оба формата! Вы можете выбрать удобный для вас: онлайн-занятия в Zoom или очные встречи в нашей студии в центре города. Качество обучения одинаково высокое в обоих форматах.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Сколько длится один курс?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  Стандартный курс рассчитан на 1-3 месяца в зависимости от выбранной программы и интенсивности занятий. Базовый курс — 1 месяц, углубленные программы — 2-3 месяца.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Можно ли заморозить абонемент?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  Да, мы предусмотрели возможность заморозки абонемента на срок до 2 недель по уважительным причинам. Просто свяжитесь с вашим куратором заранее.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Выдается ли сертификат после окончания курса?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  Да! После успешного завершения курса вы получаете именной сертификат, подтверждающий прохождение обучения. Для тарифов Премиум и VIP сертификат выдается автоматически.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Что делать, если я пропустил занятие?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  Все занятия записываются и доступны в личном кабинете в течение 30 дней. Вы сможете просмотреть пропущенное занятие в любое удобное время. Для индивидуальных уроков возможен перенос при предварительном уведомлении.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
              Запишитесь на бесплатную консультацию
            </h2>
            <p className="text-xl text-center text-white/90 mb-12">
              Обсудим ваши цели и подберем оптимальную программу развития голоса
            </p>
            <Card className="p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="text-lg py-6"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших целях..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 text-lg"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Открой свой природный голос</h3>
          <p className="text-white/70 mb-6">Раскрой потенциал своего голоса вместе с нами</p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
            <Icon name="Youtube" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
            <Icon name="Mail" size={24} className="cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;