import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [timeToGame, setTimeToGame] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'partners', label: 'Партнёры', icon: 'Handshake' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const games = [
    {
      date: '2024-10-18',
      opponent: 'Мамонты Югры',
      location: 'Домашний матч',
      time: '14:00',
      status: 'upcoming'
    },
    {
      date: '2024-10-18',
      opponent: 'Омские Ястребы',
      location: 'Выездной матч',
      time: '18:30',
      status: 'upcoming'
    },
    {
      date: '2024-10-21',
      opponent: 'МХК Спартак',
      location: 'Домашний матч',
      time: '16:00',
      status: 'upcoming'
    },
    {
      date: '2024-10-22',
      opponent: 'Белые Медведи',
      location: 'Выездной матч',
      time: '16:30',
      status: 'upcoming'
    },
    {
      date: '2024-10-26',
      opponent: 'Толпар',
      location: 'Домашний матч',
      time: '18:30',
      status: 'upcoming'
    },
    {
      date: '2024-10-28',
      opponent: 'Динамо СПБ',
      location: 'Выездной матч',
      time: '17:30',
      status: 'upcoming'
    },
    {
      date: '2024-10-30',
      opponent: 'Крылья Советов',
      location: 'Домашний матч',
      time: '18:00',
      status: 'upcoming'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Сибирским снайперам исполняется 1 месяц!',
      date: '2024-10-15',
      excerpt: 'Наша команда празднует первый месяц с момента создания клуба'
    },
    {
      id: 2,
      title: 'Игроки уезжают в аренду',
      date: '2024-10-14',
      excerpt: '#95 Galimov, #71 rundya, #90 Dangel уезжают в аренду, #71 и #90 в СКА-1946, #95 в Толпар!'
    },
    {
      id: 3,
      title: 'Сибирские снайперы вновь выиграли в сезоне',
      date: '2024-10-12',
      excerpt: 'Одержали победу над "Локомотив"'
    }
  ];

  const team = [
    { number: 17, name: 'Александр Петров', position: 'Нападающий' },
    { number: 91, name: 'Дмитрий Соколов', position: 'Нападающий' },
    { number: 23, name: 'Максим Иванов', position: 'Защитник' },
    { number: 44, name: 'Сергей Волков', position: 'Защитник' },
    { number: 1, name: 'Игорь Смирнов', position: 'Вратарь' },
    { number: 30, name: 'Андрей Козлов', position: 'Вратарь' },
  ];

  const partners = [
    { name: 'Фанатский VFHL', logo: '🏒' },
  ];

  useEffect(() => {
    const calculateTimeToGame = () => {
      const nextGame = new Date('2024-10-18T14:00:00');
      const now = new Date();
      const diff = nextGame.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeToGame({ days, hours, minutes, seconds });
      }
    };

    calculateTimeToGame();
    const interval = setInterval(calculateTimeToGame, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">🏒</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  Сибирские Снайперы
                </h1>
                <p className="text-xs text-primary-foreground/70">VFHL</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    activeSection === item.id ? 'text-secondary' : 'text-primary-foreground/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/80b3ddd5-d6c4-415a-81f6-f3125419507b/files/d04836c5-1906-483c-9fe3-87a9c2573215.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl animate-fade-in">
            <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2">
              VFHL • Сезон 2024/2025
            </Badge>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              СИБИРСКИЕ<br />СНАЙПЕРЫ
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Профессиональная молодёжная хоккейная команда из Сибири. Точность. Сила. Победа.
            </p>
            
            <Card className="bg-white/95 backdrop-blur-sm p-6 mb-8 max-w-2xl">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
                  <Icon name="Clock" size={16} />
                  До ближайшего матча против Мамонты Югры
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary">{timeToGame.days}</div>
                    <div className="text-xs text-muted-foreground">дней</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary">{timeToGame.hours}</div>
                    <div className="text-xs text-muted-foreground">часов</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary">{timeToGame.minutes}</div>
                    <div className="text-xs text-muted-foreground">минут</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary">{timeToGame.seconds}</div>
                    <div className="text-xs text-muted-foreground">секунд</div>
                  </div>
                </div>
              </div>
            </Card>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8"
                onClick={() => scrollToSection('schedule')}
              >
                Купить билеты
                <Icon name="Ticket" size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 text-lg px-8"
                onClick={() => scrollToSection('team')}
              >
                Наша команда
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <Card className="p-6 text-center bg-white/95 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">Побед в сезоне</div>
            </Card>
            <Card className="p-6 text-center bg-white/95 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Место в лиге</div>
            </Card>
            <Card className="p-6 text-center bg-white/95 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary mb-2">24</div>
              <div className="text-sm text-muted-foreground">Забитых шайб</div>
            </Card>
            <Card className="p-6 text-center bg-white/95 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary mb-2">74%</div>
              <div className="text-sm text-muted-foreground">Успех бросков</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Расписание</h2>
            <p className="text-lg text-muted-foreground">Ближайшие матчи сезона 2024/2025</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {games.map((game, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-l-4 border-l-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {new Date(game.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                    </div>
                    <div className="text-sm text-muted-foreground">{game.time}</div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">
                    {game.location}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Соперник</div>
                    <div className="text-xl font-bold text-primary">{game.opponent}</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  onClick={() => window.open('https://www.donationalerts.com/r/sibsniper', '_blank')}
                >
                  Купить билеты
                  <Icon name="ExternalLink" size={16} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Новости</h2>
            <p className="text-lg text-muted-foreground">Последние события команды</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Icon name="Newspaper" size={64} className="text-primary-foreground/50" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground mb-2">
                    {new Date(item.date).toLocaleDateString('ru-RU')}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="link" className="p-0 text-secondary">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/80b3ddd5-d6c4-415a-81f6-f3125419507b/files/dccdab74-c8b0-47fd-9c66-96171b3d1748.jpg"
            alt="Player"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Команда</h2>
            <p className="text-lg text-muted-foreground">Наши игроки - наша гордость</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {team.map((player, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in bg-white/95 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">
                      {player.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{player.name}</h3>
                    <p className="text-sm text-muted-foreground">{player.position}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Партнёры</h2>
            <p className="text-lg text-muted-foreground">Они поддерживают нашу команду</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{partner.logo}</div>
                <div className="text-sm font-medium text-center">{partner.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Контакты</h2>
              <p className="text-lg opacity-90">Свяжитесь с нами</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <Icon name="MapPin" size={40} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2 text-primary-foreground">Адрес</h3>
                <p className="text-sm text-primary-foreground/80">
                  г. Новосибирск<br />
                  ул. Олимпийская, 1<br />
                  Ледовый дворец "Сибирь"
                </p>
              </Card>
              
              <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <Icon name="Send" size={40} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2 text-primary-foreground">Telegram</h3>
                <p className="text-sm text-primary-foreground/80">
                  t.me/ggrzk
                </p>
              </Card>
              
              <Card className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <Icon name="Send" size={40} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2 text-primary-foreground">Telegram</h3>
                <p className="text-sm text-primary-foreground/80">
                  t.me/sibsniper
                </p>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <div className="flex justify-center gap-6 mb-6">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                  <Icon name="Youtube" size={24} />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                  <Icon name="Twitter" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-primary/95 text-primary-foreground/60 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              © 2024 Сибирские Снайперы. МХЛ. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;