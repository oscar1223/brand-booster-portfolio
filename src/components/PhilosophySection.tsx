const PhilosophySection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Mi filosofía
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Creo que cada proyecto de IA tiene el potencial de transformar completamente un negocio. 
              <span className="text-foreground font-medium">No se trata de seguir tendencias, sino de crear soluciones auténticas</span> que 
              conecten, optimicen y generen resultados duraderos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;