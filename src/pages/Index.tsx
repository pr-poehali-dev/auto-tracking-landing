import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const speakers = [
    {
      name: 'Алексей Морозов',
      role: 'AI/ML Engineer',
      topic: 'Нейросети в автоматическом трекинге',
      image: 'https://cdn.poehali.dev/projects/3405d2e9-8337-46a4-a657-3c4e4794a5a3/files/85980a20-4e1e-4220-aa7c-54f1afc13ae6.jpg'
    },
    {
      name: 'Анна Волкова',
      role: 'Computer Vision Lead',
      topic: 'Распознавание жестов и мимики спикера',
      image: 'https://cdn.poehali.dev/projects/3405d2e9-8337-46a4-a657-3c4e4794a5a3/files/a28b880a-213b-4686-a031-1aace1a77ce1.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      role: 'Data Scientist',
      topic: 'Аналитика поведения на сцене',
      image: 'https://cdn.poehali.dev/projects/3405d2e9-8337-46a4-a657-3c4e4794a5a3/files/72d7194e-b0ff-4ca2-84a2-d6a283cb0297.jpg'
    }
  ];

  const schedule = [
    { time: '10:00', title: 'Регистрация и Welcome Coffee', icon: 'Coffee' },
    { time: '10:30', title: 'Открытие конференции', icon: 'Mic' },
    { time: '11:00', title: 'Основной доклад: AI в видео-трекинге', icon: 'Video' },
    { time: '12:00', title: 'Панельная дискуссия', icon: 'Users' },
    { time: '13:00', title: 'Обед и нетворкинг', icon: 'Utensils' },
    { time: '14:00', title: 'Воркшопы и практика', icon: 'Laptop' },
    { time: '16:00', title: 'Закрытие', icon: 'Trophy' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 gradient-cyan-purple opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
            <span className="text-sm text-muted-foreground">24 декабря 2024 • Москва</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="text-gradient">АВТОТРЕКИНГ</span>
            <br />
            <span className="text-foreground">ДОКЛАДЧИКА</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Международная конференция о технологиях автоматического отслеживания 
            и анализа поведения спикеров на сцене
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-cyan-purple text-dark font-bold text-lg px-8 py-6 glow-cyan hover:scale-105 transition-transform">
              <Icon name="UserPlus" className="mr-2" size={24} />
              Зарегистрироваться
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground font-semibold text-lg px-8 py-6 hover:bg-primary/10 transition-all">
              <Icon name="Calendar" className="mr-2" size={24} />
              Посмотреть программу
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="backdrop-blur-sm bg-card/30 p-6 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-gradient mb-2">15+</div>
              <div className="text-muted-foreground">Спикеров</div>
            </div>
            <div className="backdrop-blur-sm bg-card/30 p-6 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-gradient mb-2">300+</div>
              <div className="text-muted-foreground">Участников</div>
            </div>
            <div className="backdrop-blur-sm bg-card/30 p-6 rounded-lg border border-border/50">
              <div className="text-4xl font-bold text-gradient mb-2">8ч</div>
              <div className="text-muted-foreground">Контента</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gradient">СПИКЕРЫ</h2>
            <p className="text-xl text-muted-foreground">Эксперты в области AI и компьютерного зрения</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-105 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{speaker.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{speaker.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground flex items-start gap-2">
                    <Icon name="Presentation" size={20} className="mt-1 text-primary flex-shrink-0" />
                    <span>{speaker.topic}</span>
                  </p>
                  <Button variant="outline" className="w-full mt-4 border-primary/30 hover:bg-primary/10">
                    <Icon name="User" className="mr-2" size={18} />
                    Посмотреть профиль
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-card/30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gradient">РАСПИСАНИЕ</h2>
            <p className="text-xl text-muted-foreground">Полная программа мероприятия</p>
          </div>
          
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-6 bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-lg hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-cyan-purple flex items-center justify-center glow-cyan">
                    <Icon name={item.icon as any} size={24} className="text-dark" />
                  </div>
                </div>
                <div className="flex-shrink-0 w-20">
                  <div className="text-2xl font-bold text-primary">{item.time}</div>
                </div>
                <div className="flex-grow">
                  <div className="text-lg font-semibold">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative" id="register">
        <div className="absolute inset-0 gradient-cyan-purple opacity-5"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 text-gradient">РЕГИСТРАЦИЯ</h2>
            <p className="text-xl text-muted-foreground">Забронируйте место на конференции</p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 glow-purple">
            <CardHeader>
              <CardTitle className="text-2xl">Заполните форму</CardTitle>
              <CardDescription>Мы отправим вам подтверждение на email</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Имя и Фамилия *</label>
                  <Input 
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-input/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email *</label>
                  <Input 
                    required
                    type="email"
                    placeholder="ivan@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-input/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Компания</label>
                  <Input 
                    placeholder="Название компании"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-input/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о своих ожиданиях от конференции..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-input/50 border-border/50 focus:border-primary min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-cyan-purple text-dark font-bold text-lg py-6 glow-cyan hover:scale-105 transition-transform">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card/30 border-t border-border/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">АВТОТРЕКИНГ</h3>
              <p className="text-muted-foreground">
                Технологии будущего для мероприятий настоящего
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-foreground">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>info@autotracking.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span>Москва, Технопарк</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-foreground">Следите за нами</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/30 text-center text-muted-foreground">
            <p>© 2024 Автотрекинг Конференция. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
