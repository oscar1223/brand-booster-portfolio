const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Recent project badge */}
        <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span>Último proyecto: Transformación ejecutiva para startup</span>
        </div>

        {/* Main headline */}
        <div className="space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl"></div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight relative">
            Construyendo puentes entre el{" "}
            <span className="text-muted-foreground">potencial</span> y el{" "}
            <span className="text-primary">éxito</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soy María, coach transformacional especializada en acompañar a profesionales y empresarios hacia una vida más auténtica y exitosa. Después de horas, transformo organizaciones.
          </p>
        </div>

        {/* Profile card */}
        <div className="flex items-center justify-center space-x-4 pt-8">
          <div className="flex items-center space-x-3 bg-muted/30 rounded-full pr-6 pl-2 py-2 hover:bg-muted/50 transition-colors cursor-pointer"
               onClick={() => scrollToSection('mi-historia')}>
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">M</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Sobre mí</div>
              <div className="text-xs text-muted-foreground">María Coach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;