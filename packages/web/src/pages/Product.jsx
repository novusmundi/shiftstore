import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTeam } from '../context/TeamContext';

const ProductPage = () => {
  const { id } = useParams();
  const { team } = useTeam();
  const { addToCart, confirmationMessage } = useCart();

  const products = [
    {
      id: 1,
      name: 'Camiseta Titular River Plate',
      price: 100,
      team: 'river',
      image_url:
        'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2ccfdc0e/products/AD_FM1182P/AD_FM1182P-1.JPG',
      description: 'Camiseta titular de River Plate, con el diseño clásico que representa la historia y grandeza del club.',
    },
    {
      id: 2,
      name: 'Camiseta Suplente River Plate',
      price: 90,
      team: 'river',
      image_url:
        'https://cf.shopee.com.ar/file/041485b853a4a74f908c569633b64035',
      description: 'Camiseta suplente de River Plate, un diseño alternativo perfecto para cualquier fanático del Millonario.',
    },
    {
      id: 3,
      name: 'Pantalón Entrenamiento River Plate',
      price: 50,
      team: 'river',
      image_url:
        'https://media.futbolmania.com/media/catalog/product/cache/1/9df78eab33525d08d6e5fb8d27136e95/H/C/HC1055_pantalon-largo-color-gris-adidas-river-plate-entrenamiento_1_completa-frontal.jpg',
      description: 'Pantalón de entrenamiento oficial de River Plate, diseñado para máximo confort y rendimiento.',
    },
    {
      id: 4,
      name: 'Bufanda River Plate',
      price: 30,
      team: 'river',
      image_url:
        'https://gauchofood.com/wp-content/uploads/2022/04/bufanda-scarf-river-plate-1__99045.webp',
      description: 'Bufanda de River Plate, ideal para lucir tus colores en los días más fríos o durante los partidos.',
    },
    {
      id: 5,
      name: 'Gorra River Plate',
      price: 25,
      team: 'river',
      image_url:
        'https://http2.mlstatic.com/D_NQ_NP_640464-MLA45470138676_042021-F.jpg',
      description: 'Gorra oficial de River Plate, perfecta para protegerte del sol mientras apoyas a tu equipo.',
    },
    {
      id: 6,
      name: 'Botella de Agua River Plate',
      price: 15,
      team: 'river',
      image_url:
        'https://http2.mlstatic.com/D_NQ_NP_921399-MLU74224148131_012024-O.webp',
      description: 'Botella de agua personalizada de River Plate, ideal para llevar a tus entrenamientos o actividades diarias.',
    },
    {
      id: 7,
      name: 'Mochila River Plate',
      price: 45,
      team: 'river',
      image_url:
        'https://http2.mlstatic.com/D_NQ_NP_600926-MLA53111952066_122022-O.webp',
      description: 'Mochila oficial de River Plate, con amplio espacio y diseño cómodo para el día a día.',
    },
    {
      id: 8,
      name: 'Almohadón River Plate',
      price: 20,
      team: 'river',
      image_url:
        'https://http2.mlstatic.com/D_NQ_NP_643295-MLU54977750847_042023-O.webp',
      description: 'Almohadón decorativo de River Plate, ideal para darle un toque millonario a tu hogar.',
    },
    {
      id: 9,
      name: 'Llavero River Plate',
      price: 10,
      team: 'river',
      image_url:
        'https://tse4.mm.bing.net/th?id=OIP.qj68-sOcyAQ8eCtlUCw6_wHaHa&pid=Api&P=0&h=180',
      description: 'Llavero oficial de River Plate, un accesorio práctico para llevar siempre contigo los colores de tu equipo.',
    },
    {
      id: 10,
      name: 'Buzo Oficial River Plate',
      price: 80,
      team: 'river',
      image_url:
        'https://http2.mlstatic.com/D_NQ_NP_770773-MLA50452091717_062022-O.webp',
      description: 'Buzo oficial de River Plate, con un diseño exclusivo para mantenerte abrigado mientras apoyas a tu club.',
    },
    {
      id: 11,
      name: 'Camiseta Titular Boca Juniors',
      price: 110,
      team: 'boca',
      image_url:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6a7d6fa0280d4d7fabedaec20122a6fe_9366/Camiseta_Titular_Boca_Juniors_22-23_Azul_HE6324_01_laydown.jpg',
      description: 'Camiseta titular de Boca Juniors, con los colores icónicos que representan al Xeneize.',
    },
    {
      id: 12,
      name: 'Camiseta Suplente Boca Juniors',
      price: 100,
      team: 'boca',
      image_url:
        'https://i0.wp.com/www.sitemarca.com/wp-content/uploads/2016/01/Nike-Boca-Juniors-suplente-frente-e1453634474546.png',
      description: 'Camiseta suplente de Boca Juniors, con un diseño alternativo que combina tradición y estilo.',
    },
    {
      id: 13,
      name: 'Pantalón Entrenamiento Boca Juniors',
      price: 55,
      team: 'boca',
      image_url:
        'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw51aaf092/products/ADHC0994/ADHC0994-2.JPG',
      description: 'Pantalón oficial de entrenamiento de Boca Juniors, diseñado para el máximo confort y rendimiento.',
    },
    {
      id: 14,
      name: 'Bufanda Boca Juniors',
      price: 35,
      team: 'boca',
      image_url:
        'https://gauchofood.com/wp-content/uploads/2022/04/bufanda-scarf-boca-juniors-1__42584.webp',
      description: 'Bufanda de Boca Juniors, perfecta para los días fríos y animar al equipo desde las gradas.',
    },
    {
      id: 15,
      name: 'Gorra Boca Juniors',
      price: 28,
      team: 'boca',
      image_url: 'https://tse2.mm.bing.net/th?id=OIP.wc8N5MU5eRg3I1VLoz0FFQHaHa&pid=Api&P=0&h=180',
      description: 'Gorra oficial de Boca Juniors, ideal para protegerte del sol mientras representas al Xeneize.',
    },
    {
      id: 16,
      name: 'Botella de Agua Boca Juniors',
      price: 18,
      team: 'boca',
      image_url: 'https://bocashop.vteximg.com.br/arquivos/ids/165414-1000-1000/P0-1859-01_1.jpg?v=637584351358530000',
      description: 'Botella de agua personalizada de Boca Juniors, diseñada para mantenerte hidratado en todo momento.',
    },
    {
      id: 17,
      name: 'Mochila Boca Juniors',
      price: 50,
      team: 'boca',
      image_url: 'https://tse2.mm.bing.net/th?id=OIP.aW9c1RRFZcBEzzXcD93TZQHaHa&pid=Api&P=0&h=180',
      description: 'Mochila oficial de Boca Juniors, con amplio espacio y diseño resistente para tus actividades diarias.',
    },
    {
      id: 18,
      name: 'Almohadón Boca Juniors',
      price: 25,
      team: 'boca',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_826993-MLA52252790186_112022-O.webp',
      description: 'Almohadón decorativo de Boca Juniors, ideal para descansar mientras demuestras tu pasión por el equipo.',
    },
    {
      id: 19,
      name: 'Llavero Boca Juniors',
      price: 12,
      team: 'boca',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_767218-MCO28253639128_092018-O.jpg',
      description: 'Llavero de Boca Juniors, pequeño y práctico para llevar los colores del equipo siempre contigo.',
    },
    {
      id: 20,
      name: 'Buzo Oficial Boca Juniors',
      price: 85,
      team: 'boca',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_749342-MLA49717679680_042022-O.jpg',
      description: 'Buzo oficial de Boca Juniors, diseñado para abrigarte mientras apoyas a tu equipo con orgullo.',
    },
    {
      id: 21,
      name: 'Camiseta Titular Racing Club',
      price: 115,
      team: 'racing',
      image_url: 'http://marcadegol.com/fotos/2016/03/camiseta-titular-racing-club-2016-1-660x796.jpg',
      description: 'Camiseta titular de Racing Club, con un diseño elegante que refleja la tradición del club.',
    },
    {
      id: 22,
      name: 'Camiseta Suplente Racing Club',
      price: 95,
      team: 'racing',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_640464-MLA45470138676_042021-F.jpg',
      description: 'Camiseta suplente de Racing Club, perfecta para los fanáticos que buscan un estilo alternativo.',
    },
    {
      id: 23,
      name: 'Pantalón Entrenamiento Racing Club',
      price: 48,
      team: 'racing',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/179634/Imagen-1.jpg?v=637759040831470000',
      description: 'Pantalón de entrenamiento oficial de Racing Club, diseñado para máxima comodidad y rendimiento.',
    },
    {
      id: 24,
      name: 'Bufanda Racing Club',
      price: 33,
      team: 'racing',
      image_url: 'https://admin.nuevogema.com.ar/Content/UploadDirectory/Products/1892/image_e391e5f9-f13a-4fc4-b68e-0dbda4610e2f.jpg',
      description: 'Bufanda de Racing Club, ideal para abrigarte mientras apoyas a La Academia en los partidos.',
    },
    {
      id: 25,
      name: 'Gorra Racing Club',
      price: 27,
      team: 'racing',
      image_url: 'https://tse2.mm.bing.net/th?id=OIP.sAqpiF0dzkYvOY25uWcwkgHaHa&pid=Api&P=0&h=180',
      description: 'Gorra oficial de Racing Club, perfecta para cualquier ocasión y para lucir con estilo.',
    },
    {
      id: 26,
      name: 'Botella de Agua Racing Club',
      price: 16,
      team: 'racing',
      image_url: 'https://tse1.mm.bing.net/th?id=OIP.M5B1v0iIH2XsCqh-p1ARPAHaHa&pid=Api&P=0&h=180',
      description: 'Botella de agua de Racing Club, diseñada para mantenerte hidratado en cualquier actividad.',
    },
    {
      id: 27,
      name: 'Mochila Racing Club',
      price: 47,
      team: 'racing',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/164504-800-auto?v=637705595533000000&width=800&height=auto&aspect=true',
      description: 'Mochila oficial de Racing Club, resistente y espaciosa, ideal para acompañarte a todos lados.',
    },
    {
      id: 28,
      name: 'Almohadón Racing Club',
      price: 22,
      team: 'racing',
      image_url: 'https://images.fravega.com/f1000/a26141cd0383fc30058430e1f5fa15b1.jpg',
      description: 'Almohadón decorativo de Racing Club, perfecto para tu hogar y para descansar cómodamente.',
    },
    {
      id: 29,
      name: 'Llavero Racing Club',
      price: 11,
      team: 'racing',
      image_url: 'https://files.cults3d.com/uploaders/18590353/illustration-file/5fcba0af-716f-4fba-a728-77b328f24302/PhotoRoom_20220329_131624.jpg',
      description: 'Llavero de Racing Club, un accesorio indispensable para cualquier fanático de La Academia.',
    },
    {
      id: 30,
      name: 'Buzo Oficial Racing Club',
      price: 82,
      team: 'racing',
      image_url: 'https://gauchofood.com/wp-content/uploads/2022/04/bufanda-scarf-river-plate-1__99045.webp',
      description: 'Buzo oficial de Racing Club, con diseño moderno y cálido para los días más fríos.',
    },
    {
      id: 31,
      name: 'Camiseta Titular Aldosivi',
      price: 95,
      team: 'aldosivi',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/160874/Imagen-1.jpg?v=637705518308700000',
      description: 'Camiseta titular de Aldosivi, con un diseño que representa los colores del Tiburón.',
    },
    {
      id: 32,
      name: 'Camiseta Suplente Aldosivi',
      price: 85,
      team: 'aldosivi',
      image_url: 'http://2.bp.blogspot.com/-3Du4xXKJToM/UzYfsCNsWGI/AAAAAAAABbg/j7h1ibca5QY/s1600/Aldosivi.bmp',
      description: 'Camiseta suplente de Aldosivi, diseñada para los hinchas más apasionados.',
    },
    {
      id: 33,
      name: 'Pantalón Entrenamiento Aldosivi',
      price: 45,
      team: 'aldosivi',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/169604-800-auto?v=637705588075200000&width=800&height=auto&aspect=true',
      description: 'Pantalón oficial de entrenamiento de Aldosivi, ideal para entrenar cómodamente.',
    },
    {
      id: 14,
      name: 'Bufanda Boca Juniors',
      price: 35,
      team: 'boca',
      image_url: 'https://gauchofood.com/wp-content/uploads/2022/04/bufanda-scarf-boca-juniors-1__42584.webp',
      description: 'Bufanda de Boca Juniors, perfecta para los días fríos y animar al equipo desde las gradas.',
    },
    {
      id: 15,
      name: 'Gorra Boca Juniors',
      price: 28,
      team: 'boca',
      image_url: 'https://tse2.mm.bing.net/th?id=OIP.wc8N5MU5eRg3I1VLoz0FFQHaHa&pid=Api&P=0&h=180',
      description: 'Gorra oficial de Boca Juniors, ideal para protegerte del sol mientras representas al Xeneize.',
    },
    {
      id: 16,
      name: 'Botella de Agua Boca Juniors',
      price: 18,
      team: 'boca',
      image_url: 'https://bocashop.vteximg.com.br/arquivos/ids/165414-1000-1000/P0-1859-01_1.jpg?v=637584351358530000',
      description: 'Botella de agua personalizada de Boca Juniors, diseñada para mantenerte hidratado en todo momento.',
    },
    {
      id: 17,
      name: 'Mochila Boca Juniors',
      price: 50,
      team: 'boca',
      image_url: 'https://tse2.mm.bing.net/th?id=OIP.aW9c1RRFZcBEzzXcD93TZQHaHa&pid=Api&P=0&h=180',
      description: 'Mochila oficial de Boca Juniors, con amplio espacio y diseño resistente para tus actividades diarias.',
    },
    {
      id: 18,
      name: 'Almohadón Boca Juniors',
      price: 25,
      team: 'boca',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_826993-MLA52252790186_112022-O.webp',
      description: 'Almohadón decorativo de Boca Juniors, ideal para descansar mientras demuestras tu pasión por el equipo.',
    },
    {
      id: 19,
      name: 'Llavero Boca Juniors',
      price: 12,
      team: 'boca',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_767218-MCO28253639128_092018-O.jpg',
      description: 'Llavero de Boca Juniors, pequeño y práctico para llevar los colores del equipo siempre contigo.',
    },
    {
      id: 20,
      name: 'Buzo Oficial Boca Juniors',
      price: 85,
      team: 'boca',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_749342-MLA49717679680_042022-O.jpg',
      description: 'Buzo oficial de Boca Juniors, diseñado para abrigarte mientras apoyas a tu equipo con orgullo.',
    },
    {
      id: 21,
      name: 'Camiseta Titular Racing Club',
      price: 115,
      team: 'racing',
      image_url: 'http://marcadegol.com/fotos/2016/03/camiseta-titular-racing-club-2016-1-660x796.jpg',
      description: 'Camiseta titular de Racing Club, con un diseño elegante que refleja la tradición del club.',
    },
    {
      id: 22,
      name: 'Camiseta Suplente Racing Club',
      price: 95,
      team: 'racing',
      image_url: 'https://http2.mlstatic.com/D_NQ_NP_640464-MLA45470138676_042021-F.jpg',
      description: 'Camiseta suplente de Racing Club, perfecta para los fanáticos que buscan un estilo alternativo.',
    },
    {
      id: 23,
      name: 'Pantalón Entrenamiento Racing Club',
      price: 48,
      team: 'racing',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/179634/Imagen-1.jpg?v=637759040831470000',
      description: 'Pantalón de entrenamiento oficial de Racing Club, diseñado para máxima comodidad y rendimiento.',
    },
    {
      id: 24,
      name: 'Bufanda Racing Club',
      price: 33,
      team: 'racing',
      image_url: 'https://admin.nuevogema.com.ar/Content/UploadDirectory/Products/1892/image_e391e5f9-f13a-4fc4-b68e-0dbda4610e2f.jpg',
      description: 'Bufanda de Racing Club, ideal para abrigarte mientras apoyas a La Academia en los partidos.',
    },
    {
      id: 25,
      name: 'Gorra Racing Club',
      price: 27,
      team: 'racing',
      image_url: 'https://tse2.mm.bing.net/th?id=OIP.sAqpiF0dzkYvOY25uWcwkgHaHa&pid=Api&P=0&h=180',
      description: 'Gorra oficial de Racing Club, perfecta para cualquier ocasión y para lucir con estilo.',
    },
    {
      id: 26,
      name: 'Botella de Agua Racing Club',
      price: 16,
      team: 'racing',
      image_url: 'https://tse1.mm.bing.net/th?id=OIP.M5B1v0iIH2XsCqh-p1ARPAHaHa&pid=Api&P=0&h=180',
      description: 'Botella de agua de Racing Club, diseñada para mantenerte hidratado en cualquier actividad.',
    },
    {
      id: 27,
      name: 'Mochila Racing Club',
      price: 47,
      team: 'racing',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/164504-800-auto?v=637705595533000000&width=800&height=auto&aspect=true',
      description: 'Mochila oficial de Racing Club, resistente y espaciosa, ideal para acompañarte a todos lados.',
    },
    {
      id: 28,
      name: 'Almohadón Racing Club',
      price: 22,
      team: 'racing',
      image_url: 'https://images.fravega.com/f1000/a26141cd0383fc30058430e1f5fa15b1.jpg',
      description: 'Almohadón decorativo de Racing Club, perfecto para tu hogar y para descansar cómodamente.',
    },
    {
      id: 29,
      name: 'Llavero Racing Club',
      price: 11,
      team: 'racing',
      image_url: 'https://files.cults3d.com/uploaders/18590353/illustration-file/5fcba0af-716f-4fba-a728-77b328f24302/PhotoRoom_20220329_131624.jpg',
      description: 'Llavero de Racing Club, un accesorio indispensable para cualquier fanático de La Academia.',
    },
    {
      id: 30,
      name: 'Buzo Oficial Racing Club',
      price: 82,
      team: 'racing',
      image_url: 'https://gauchofood.com/wp-content/uploads/2022/04/bufanda-scarf-river-plate-1__99045.webp',
      description: 'Buzo oficial de Racing Club, con diseño moderno y cálido para los días más fríos.',
    },
    {
      id: 31,
      name: 'Camiseta Titular Aldosivi',
      price: 95,
      team: 'aldosivi',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/160874/Imagen-1.jpg?v=637705518308700000',
      description: 'Camiseta titular de Aldosivi, con un diseño que representa los colores del Tiburón.',
    },
    {
      id: 32,
      name: 'Camiseta Suplente Aldosivi',
      price: 85,
      team: 'aldosivi',
      image_url: 'http://2.bp.blogspot.com/-3Du4xXKJToM/UzYfsCNsWGI/AAAAAAAABbg/j7h1ibca5QY/s1600/Aldosivi.bmp',
      description: 'Camiseta suplente de Aldosivi, diseñada para los hinchas más apasionados.',
    },
    {
      id: 33,
      name: 'Pantalón Entrenamiento Aldosivi',
      price: 45,
      team: 'aldosivi',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/169604-800-auto?v=637705588075200000&width=800&height=auto&aspect=true',
      description: 'Pantalón oficial de entrenamiento de Aldosivi, ideal para entrenar cómodamente.',
    },
    {
      id: 34,
      name: 'Bufanda Aldosivi',
      price: 30,
      team: 'aldosivi',
      image_url: 'https://logodetimes.com/times/aldosivi/logo-aldosivi-1536.png',
      description: 'Bufanda de Aldosivi, perfecta para apoyar al equipo durante los días más fríos.',
    },
    {
      id: 35,
      name: 'Gorra Aldosivi',
      price: 20,
      team: 'aldosivi',
      image_url: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/990/663/products/g111-12b8d5919b9ddf2d0c15960427271597-640-0.webp',
      description: 'Gorra oficial de Aldosivi, con diseño cómodo y ajustable.',
    },
    {
      id: 36,
      name: 'Botella de Agua Aldosivi',
      price: 15,
      team: 'aldosivi',
      image_url: 'https://tse3.mm.bing.net/th?id=OIP.HxCSBWFYDpXB3mXE2aVzjgHaHn&pid=Api&P=0&h=180',
      description: 'Botella de agua de Aldosivi, práctica y personalizada para los hinchas del Tiburón.',
    },
    {
      id: 37,
      name: 'Mochila Aldosivi',
      price: 40,
      team: 'aldosivi',
      image_url: 'https://kappaarg.vtexassets.com/arquivos/ids/224726/Imagen-2.jpg?v=638213551296230000',
      description: 'Mochila oficial de Aldosivi, resistente y con amplio espacio para tus actividades.',
    },
    {
      id: 38,
      name: 'Almohadón Aldosivi',
      price: 18,
      team: 'aldosivi',
      image_url: 'https://media.diariopopular.com.ar/adjuntos/143/imagenes/004/376/0004376679.png',
      description: 'Almohadón decorativo de Aldosivi, un detalle ideal para la casa de cualquier fanático.',
    },
    {
      id: 39,
      name: 'Llavero Aldosivi',
      price: 10,
      team: 'aldosivi',
      image_url: 'https://www.argensend.com/wp-content/uploads/2021/11/Captura-de-Pantalla-2021-11-09-a-las-16.49.08.png',
      description: 'Llavero de Aldosivi, un accesorio práctico para llevar contigo tu pasión por el equipo.',
    },
    {
      id: 40,
      name: 'Buzo Oficial Aldosivi',
      price: 78,
      team: 'aldosivi',
      image_url: 'https://tse3.mm.bing.net/th?id=OIP.SR_DSQS5XwIo5VA3qg0bgQHaHa&pid=Api&P=0&h=180',
      description: 'Buzo oficial de Aldosivi, ideal para los días fríos y para mostrar tu apoyo al equipo.',
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const relatedProducts = products
    .filter((p) => p.team === product.team && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className={`bg-${team}-primary text-${team}-secondary min-h-screen p-6`}>
  <Link to="/" className="text-primary-light hover:text-primary-dark mb-4 inline-block">
    &larr; Volver a Inicio
  </Link>
  {confirmationMessage && (
    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
      {confirmationMessage}
    </div>
  )}
  <div className="flex flex-col md:flex-row gap-6">
    <div className="w-full md:w-1/2">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-contain rounded-lg mb-6 md:mb-0 md:mr-6"
      />
    </div>
    <div className="w-full md:w-1/2">
      <h1
        className={`text-3xl font-bold ${
          team === 'racing' ? 'text-gray-900' : 'text-neutral-dark'
        }`}
      >
        {product.name}
      </h1>
      <p
        className={`mt-4 ${
          team === 'racing' ? 'text-gray-800' : 'text-gray-600'
        }`}
      >
        {product.description}
      </p>
      <p
        className={`font-bold text-2xl mt-6 ${
          team === 'racing' ? 'text-gray-900' : 'text-primary-light'
        }`}
      >
        ${product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
        className={`mt-4 px-6 py-3 rounded transition-colors ${
          team === 'racing'
            ? 'bg-gray-900 text-white hover:bg-gray-700 hover:text-gray-300'
            : 'bg-primary-light text-white hover:bg-primary-dark'
        }`}
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.map((related) => (
        <div
          key={related.id}
          className={`border rounded-lg shadow hover:shadow-lg transition-shadow p-4 ${
            related.team === 'racing' ? 'bg-[#b2ebf2]' : `bg-${related.team}-secondary`
          }`}
        >
          <img
            src={related.image_url}
            alt={related.name}
            className="h-40 w-full object-cover rounded-lg mb-4"
          />
          <h3
            className={`text-lg font-bold ${
              related.team === 'racing' ? 'text-gray-900' : `text-${related.team}-primary`
            } mb-2`}
          >
            {related.name}
          </h3>
          <p
            className={`font-bold text-xl ${
              related.team === 'racing' ? 'text-gray-900' : `text-${related.team}-primary`
            }`}
          >
            ${related.price}
          </p>
          <button
            className={`mt-4 px-4 py-2 rounded-lg transition-colors ${
              related.team === 'racing'
                ? 'bg-gray-900 text-white hover:bg-gray-700 hover:text-gray-300'
                : `bg-${related.team}-primary text-${related.team}-secondary hover:bg-${related.team}-secondary hover:text-${related.team}-primary`
            }`}
          >
            Ver Detalles
          </button>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ProductPage;
