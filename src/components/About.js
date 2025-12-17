import '../styles/About.css';
import Contact from './Contact';
function About() {
  return (
    <div class="about-box">        
      <h2>Sobre Mim</h2>
      <p>
        Me chamo Matheus Frantz de Faria, entusiasta da resolução de desafios que necessitam de engenhosidade.

        Sou um profissional de desenvolvimento desde 2018, com experiência em Desenvolvimento de software, ETL, 
        criação e otimização de pipelines de dados e projetos de visão computacional.       
        </p>

      <p>
        Possuo facilidade no aprendizado e busco sempre estar atualizo em diversas áreas, pois acredito que a 
        multidisciplinaridade é a chave para uma melhor aplicação de desenvolvimento, não só na questão técnica de 
        linguagens/ferramentas mas também nos contextos gerais que envolvem os desafios

            
        com experiência em manipulação de dados, otimização de algoritmos e integração de modelos de IA,
        busco sempre entregar soluções eficientes e escaláveis para desafios reais do mercado.
      </p>
      <div className="profile-goal">
        <div className="profile-formation">
          <h2>Formação acadêmica</h2>
          <div className="experience-item">
            <h3>Mestrado em Engenharia de Computação Robótica e Automação Inteligente [FURG]</h3>
            <p className="experience-period">mar/2016 - out/2018</p>
            
          </div>
          <div className="experience-item">
            <h3>Graduação em Engenharia de Automação [FURG]</h3>
            <p className="experience-period">mar/2009 - jan/2016</p>
            
          </div>
          <div className="experience-item">
            <h3>Curso Técnico em Informática [URCAMP]</h3>
            <p className="experience-period">mar/2005 - dez/2009</p>
            
          </div>
        </div>

        <div className="profile-skills">
          <h2>Habilidades Principais</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <strong>Python</strong>
              <span>Avançado</span>
            </div>
            <div className="skill-item">
              <strong>Machine Learning</strong>
              <span>Intermediário</span>
            </div>
            <div className="skill-item">
              <strong>Engenharia de Dados</strong>
              <span>Avançado</span>
            </div>
            <div className="skill-item">
              <strong>React.js</strong>
              <span>Intermediário</span>
            </div>
            <div className="skill-item">
              <strong>SQL</strong>
              <span>Avançado</span>
            </div>
          </div>
        </div>

      </div>

      <div className="profile-experience">
        <h2>Experiência</h2>
        <div className="experience-item">
          <h3>Pleno | Desenvolvedor de Software [Ubots]</h3>
          <p className="experience-period">set/2023 - out/2025</p>
          <ul>
            <li> Criação de consultas SQL e modificações no banco de dados para geração de relatórios </li>
            <li> Implementação de funções e triggers PL/SQL no postgresql </li>
            <li> Modificações em APIs Java e groovy; </li>
            <li> Soluções para clientes utilizando LLMs em python, N8N agents e Langflow </li>
            <li> Migrações para BigQuery </li>
            <li> Criação de fluxos de integrações no N8N </li>
            <li> Desenvolvimento de novas ferramentas e componentes para chatbots</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Junior | ETL [Compass.uol] </h3>
          <p className="experience-period">out/2018 - nov/2022</p>
          <ul>
            <li>Projeto ETL em EDQ e Talend</li>
            <li>Implementação de datalake AWS e visualização de dados no Redash</li>
            <li>Protótipos de soluções em visão computacional utilizando OpenCV e YoloV5</li>
          </ul>
        </div>
      </div>
      <Contact />
  

    </div>
  )

          


}

export default About;