import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

      <section className="py-20 bg-muted/30">
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
