// Array de objetos contendo informações das fotos e descrições
const photos = [
    {
      imageUrl: 'https://www.infoescola.com/wp-content/uploads/2017/04/pombo-comum_349117397.jpg',
      title: 'Pombo Padrão',
      description: 'O pombo que só come pão na praça da Sé'
    },
    {
      imageUrl: 'https://ddjlle.com.br/wp-content/uploads/2018/12/5-Motivos-para-Contratar-o-Manejo-de-pombos.jpg',
      title: 'Dois Pombinhos',
      description: 'Dois malditos comemorando o Valentines Day.'
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/71rRjsIsB-L._AC_UF1000,1000_QL80_.jpg',
      title: 'Pombo Privado',
      description: 'Pombo que teve sua liberdade privada após conspirar no 11 de setembro.'
    },
    {
      imageUrl: 'https://img.r7.com/images/pesquisa-cartazes-bh-27072023154258332?dimensions=442x241&&&&&&resize=442x241&crop=1024x558+0+98',
      title: 'El Pombo & El Rato',
      description: 'Desaparecidos e procurados pela justiça por cagarem em crianças em um parque.'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Foto 5',
      description: 'Descrição da Foto 5.'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Foto 6',
      description: 'Descrição da Foto 6.'
    },
  ];
  
  // Função para adicionar cards à galeria
  function addCardsToGallery() {
    const gallery = document.getElementById('gallery');
  
    photos.forEach(photo => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const img = document.createElement('img');
      img.src = photo.imageUrl;
      card.appendChild(img);
  
      const description = document.createElement('div');
      description.classList.add('description');
  
      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = photo.title;
      description.appendChild(title);
  
      const text = document.createElement('div');
      text.classList.add('text');
      text.textContent = photo.description;
      description.appendChild(text);
  
      card.appendChild(description);
  
      gallery.appendChild(card);
    });
  }
  
  // Adiciona os cards à galeria quando a página é carregada
  window.onload = addCardsToGallery;