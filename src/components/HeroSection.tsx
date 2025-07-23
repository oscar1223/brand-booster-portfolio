const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-8 md:pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        {/* Recent project badge */}
        <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="hidden sm:inline">Último proyecto: Transformación ejecutiva para startup</span>
          <span className="sm:hidden">Último proyecto: Transformación startup</span>
        </div>

        {/* Main headline */}
        <div className="space-y-4 md:space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-2xl md:blur-3xl"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight relative px-2">
            Construyendo puentes entre el{" "}
            <span className="text-muted-foreground">potencial</span> y el{" "}
            <span className="text-primary">éxito</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Soy María, coach transformacional especializada en acompañar a profesionales y empresarios hacia una vida más auténtica y exitosa. Después de horas, transformo organizaciones.
          </p>
        </div>

        {/* Profile card */}
        <div className="flex items-center justify-center pt-6 md:pt-8">
          <div className="flex items-center space-x-3 bg-muted/30 rounded-full pr-4 md:pr-6 pl-2 py-2 hover:bg-muted/50 transition-colors cursor-pointer"
               onClick={() => scrollToSection('mi-historia')}>
            <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-xs md:text-sm">M</span>
            </div>
            <div className="text-left">
              <div className="text-xs md:text-sm font-medium">Sobre mí</div>
              <div className="text-xs text-muted-foreground">María Coach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;