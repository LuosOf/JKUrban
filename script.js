// ============================================
// CONFIGURACIÓN Y VARIABLES GLOBALES
// ============================================
const WHATSAPP_NUMBER = "945105822"; 
let cart = [];
let currentPage = 1;
const productsPerPage = 12; 

// ============================================
// BASE DE DATOS DE PRODUCTOS
// ============================================
// ============================================
// BASE DE DATOS DE PRODUCTOS (NOMBRES EN MAYÚSCULAS)
// ============================================
const productsDB = [
    { id: 12, name: "NIKE DUNK LOW RAYSSA LEAL", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Rayssa-Leal-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358", description: "Estilo skate exclusivo de Rayssa Leal.", tag: "nuevo" },
    { id: 13, name: "NIKE SHOX METALLIC SILVER", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://goldenstoreperu.com/wp-content/uploads/2025/10/6-HQ4049-001-NIKE-SHOX-METALLIC-SILVER.png", description: "El regreso de los resortes clásicos." },
    { id: 14, name: "NIKE SHOX BLACK UNIVERSITY", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://images.stockx.com/images/Nike-Shox-TL-Black-University-Red-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358", description: "Colores universitarios agresivos." },

    // --- ASICS KAYANO 14 ---
    { id: 15, name: "ASICS KAYANO 14 METALLIC PLUM", price: 339, category: "hombres", brand: "Asics", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/111-HM6803-101-NIKE-VOMERO-18-COCONUT-MILK.png", description: "Retro running con acabados metálicos." },
    { id: 16, name: "ASICS KAYANO 14 METALLIC GRAY", price: 339, category: "hombres", brand: "Asics", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/136-HM6803-103-NIKE-VOMERO-18-ROAD-RUNNING.png", description: "Estilo técnico y futurista." },
    { id: 17, name: "ASICS KAYANO 14 TRIPLE BLACK", price: 339, category: "hombres", brand: "Asics", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/141-HM5907-009-NIKE-VOMERO-18-BLACK-WHITE.png", description: "Totalmente negro, elegancia discreta." },
    { id: 18, name: "ASICS KAYANO 14 WHITE TUNA BLUE", price: 339, category: "hombres", brand: "Asics", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/156-HM6803-401-NIKE-VOMERO-18-BUE-VOID.png", description: "Combinación fresca y deportiva." },
    { id: 36, name: "ASICS KAYANO 14 SILVER BLACK", price: 359, category: "hombres", brand: "Asics", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2024/01/91-DH6927-111-AIR-JORDAN-4-RETRO-MILITARY-BLACK.png", description: "El colorway más buscado de la temporada." },

    // --- NIKE METCON 6 ---
    { id: 37, name: "NIKE FREE METCON 6 WHITE", price: 359, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2023/12/106-CT8527-100-AIR-JORDAN-4-RETRO-WHITE-OREO.png", description: "Estabilidad máxima para entrenamiento." },
    { id: 40, name: "NIKE FREE METCON 6 BLACK", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2023/12/101-DM7866-162-TRAVIS-SCOTT-X-AIR-JORDAN-1-LOW-REVERSE-MOCHA.png", description: "Resistencia y flexibilidad." },
    { id: 43, name: "NIKE FREE METCON 6 ROYAL BLUE", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2023/12/141-MR530SG-NEW-BALANCE-530-WHITE-GREY-NAVY.png", description: "Color vibrante para el gimnasio." },
    { id: 44, name: "NIKE FREE METCON 6 TRIPLE BLACK", price: 309, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2024/01/1-ID2529-ADIDAS-CAMPUS-LIGHT-BAD-BUNNY.png", description: "Diseño stealth para entrenar." },
    { id: 1, name: "NIKE FREE METCON 6 GAME ROYAL", price: 450, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2021/07/26-CN8490-003-NIKE-AIR-MAX-90-BLACK-WHITE.png", description: "Alto rendimiento funcional." },

    // --- NIKE AIR FORCE 1 (NUEVOS) ---
    { id: 50, name: "NIKE AIR FORCE 1 BLACK STARDUST", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Stardust", description: "Un toque de polvo estelar en el clásico." },
    { id: 51, name: "NIKE AIR FORCE 1 HOUSTON", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Houston", description: "Edición ciudad de Houston." },
    { id: 52, name: "NIKE AIR FORCE 1 TRIPLE RED", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Red", description: "Rojo total impactante." },
    { id: 53, name: "NIKE AIR FORCE 1 MOVING COMPANY", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Moving", description: "Detalles utilitarios únicos." },

    // --- NIKE VOMERO 18 (SERIE COMPLETA) ---
    { id: 54, name: "NIKE VOMERO 18 SUMMIT BLACK", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/101-HM6803-007-NIKE-VOMERO-18-SUMMIT-BLACK.png", description: "Amortiguación premium diaria." },
    { id: 55, name: "NIKE VOMERO 18 SILVER BLACK", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/1-HM6803-055-NIKE-VOMERO-18-SILVER-BLACK.png", description: "Detalles plateados reflectantes." },
    { id: 56, name: "NIKE VOMERO 18 BARELY GREEN", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/106-HM6803-300-NIKE-VOMERO-18-BARELY-GREEN.png", description: "Tono verde suave y fresco." },
    { id: 57, name: "NIKE VOMERO 18 COCONUT MILK", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/111-HM6803-101-NIKE-VOMERO-18-COCONUT-MILK.png", description: "Color crema tendencia." },
    { id: 58, name: "NIKE VOMERO 18 ROAD RUNNING", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/136-HM6803-103-NIKE-VOMERO-18-ROAD-RUNNING.png", description: "Diseñado para el asfalto." },
    { id: 59, name: "NIKE VOMERO 18 BLACK WHITE", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/141-HM5907-009-NIKE-VOMERO-18-BLACK-WHITE.png", description: "Blanco y negro esencial." },
    { id: 60, name: "NIKE VOMERO 18 BLUE VOID", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2025/10/156-HM6803-401-NIKE-VOMERO-18-BUE-VOID.png", description: "Azul profundo elegante." },

    // --- OTROS MODELOS (DUNK, JORDAN, UPTEMPO, TRAIL) ---
    { id: 61, name: "NIKE DUNK LOW PARRA URBANO", price: 329, category: "mujeres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzDwNQ5zKfRUVtvcGhTZ_hxO-6Fbkltk8IPQ&s", description: "Arte abstracto en tus pies." },
    { id: 62, name: "AIR JORDAN 1 LOW BLACK ROYAL", price: 359, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ1+Royal", description: "Colores reales clásicos." },
    { id: 63, name: "AIR JORDAN 1 LOW COURT PURPLE", price: 359, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ1+Purple", description: "Púrpura vibrante." },
    { id: 64, name: "NIKE VOMERO PLUS TOTAL ORANGE", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Vomero+Orange", description: "Naranja energético." },
    { id: 65, name: "NIKE VOMERO PLUS WHITE CRIMSON", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Vomero+Crimson", description: "Blanco con acentos carmesí." },
    { id: 66, name: "NIKE VOMERO PLUS WHITE BLEACHED", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Vomero+Bleached", description: "Estilo desteñido moderno." },
    { id: 67, name: "NIKE AIR MORE UPTEMPO LOW BLACK GUM", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Uptempo+Gum", description: "Suela de goma clásica." },
    { id: 68, name: "NIKE AIR MORE UPTEMPO LOW BLACK", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Uptempo+Black", description: "El gigante del aire en negro." },
    { id: 69, name: "NIKE AIR MORE UPTEMPO LOW HYPER ROYAL", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Uptempo+Royal", description: "Azul real impactante." },
    { id: 70, name: "NIKE PEGASUS TRAIL 5 ARMORY NAVY", price: 349, category: "mujeres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVm-GSH0Q_YdmS7mp_JHyVEVBG_EtfNapKtg&s", description: "Domina los senderos." },
    { id: 71, name: "NIKE ZEGAMA TRAIL 2 WHITE RED", price: 359, category: "mujeres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://imperiumstore.pe/wp-content/uploads/2025/06/126.png", description: "Tracción superior en montaña." },
    { id: 72, name: "NIKE ZEGAMA TRAIL 2 DAYBREAK", price: 359, category: "mujeres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://shop.skinnyraven.com/images/1575/131_377898_1713305025707.png", description: "Colores inspirados en el amanecer." },

    // --- NIKE RUNNING & TRAIL (INFINITY / PEGASUS / ZEGAMA) ---
    { id: 73, name: "NIKE INFINITY-RN WHITE ORANGE", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Infinity+Orange", description: "Soporte y amortiguación para cada kilómetro." },
    { id: 74, name: "NIKE INFINITY-RN BLACK VOLT", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Infinity+Volt", description: "Energía y estilo en color negro y volt." },
    { id: 75, name: "NIKE INFINITY-RN DEEP JUNGLE", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Infinity+Jungle", description: "Tono verde profundo para destacar." },
    { id: 76, name: "NIKE PEGASUS TRAIL 5 SAIL WHITE", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Pegasus+Sail", description: "Versatilidad para tierra y asfalto." },
    { id: 77, name: "NIKE PEGASUS TRAIL 5 JADE HORIZON", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Pegasus+Jade", description: "Colores inspirados en la naturaleza." },
    { id: 78, name: "NIKE PEGASUS TRAIL 5 SANDDRIFT", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Pegasus+Sand", description: "Tono arena ideal para el sendero." },
    { id: 79, name: "NIKE PEGASUS TRAIL 5 BLACK", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Pegasus+Black", description: "Resistencia total en negro." },
    { id: 80, name: "NIKE ZEGAMA TRAIL 2 BLACK GRAY", price: 359, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Zegama+Black", description: "Agarre técnico para terrenos difíciles." },

    // --- NIKE NOCTA & AF1 ---
    { id: 81, name: "NIKE AIR FORCE 1 NOCTA WHITE", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Nocta+White", description: "Colaboración exclusiva Drake x Nike." },
    { id: 82, name: "NIKE AIR FORCE 1 NOCTA CITRON TINT", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Nocta+Citron", description: "Detalles premium en tono limón." },
    { id: 83, name: "NIKE AIR FORCE 1 NOCTA BLACK", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Nocta+Black", description: "Elegancia nocturna total." },
    { id: 84, name: "NIKE AIR FORCE 1 NOCTA PINK", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Nocta+Pink", description: "Estilo audaz en rosa." },
    { id: 85, name: "NIKE AIR FORCE 1 NOCTA COBALT", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Nocta+Cobalt", description: "Azul cobalto vibrante." },
    { id: 86, name: "NIKE AIR FORCE 1 HOT RED", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Hot+Red", description: "Rojo intenso que llama la atención." },
    { id: 87, name: "NIKE AIR FORCE 1 BLACK WHITE SOLE", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+BW+Sole", description: "Negro con suela blanca clásica." },
    { id: 88, name: "NIKE AIR FORCE 1 UNIVERSITY BLACK", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Uni+Black", description: "Acabado universitario premium." },
    { id: 89, name: "NIKE AIR FORCE 1 '07 TRIPLE BLACK", price: 319, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Triple+Black", description: "El clásico indiscutible todo negro." },
    { id: 90, name: "NIKE AIR FORCE 1 MID TRIPLE WHITE", price: 329, category: "mujeres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2022/06/315123-111_-1.jpg?fit=1024%2C1021&ssl=1", description: "Silueta Mid en blanco puro." },
    { id: 91, name: "NIKE AIR FORCE 1 LV8 DOUBLE SWOOSH", price: 309, category: "mujeres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2021/12/ee-2.png?fit=1024%2C1024&ssl=1", description: "Doble logo, doble estilo." },
    { id: 92, name: "NIKE AIR FORCE 1 PANDA", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+Panda", description: "El colorway blanco y negro de moda." },
    { id: 93, name: "NIKE AIR FORCE 1´07", price: 319, category: "mujeres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2021/09/b8b5155f92048a02446a194e53468428.jpg?fit=771%2C771&ssl=1", description: "El icono de las calles." },
    { id: 94, name: "NIKE AIR FORCE 1 82 WHITE BLUE", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AF1+82", description: "Homenaje al año 1982." },

    // --- ZOOM VOMERO & P-6000 ---
    { id: 95, name: "NIKE ZOOM VOMERO 5 BLACK", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Vomero+5+Black", description: "Comodidad retro-running." },
    { id: 96, name: "NIKE ZOOM VOMERO 5 WHITE", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Vomero+5+White", description: "Limpieza y tecnología Zoom." },
    { id: 97, name: "NIKE ZOOM VOMERO 5 METALLIC", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Vomero+5+Metallic", description: "Detalles metálicos futuristas." },
    { id: 98, name: "NIKE P-6000 METALLIC SILVER BLACK", price: 319, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=P6000+Silver", description: "Estética running de los 2000." },
    { id: 99, name: "NIKE P-6000 PREMIUM TRIPLE BLACK", price: 319, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=P6000+Black", description: "Look stealth retro." },

    // --- LACOSTE ---
    { id: 100, name: "LACOSTE ELITE ACTIVE TEXTILE BLACK", price: 299, category: "hombres", brand: "Lacoste", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Lacoste+Black", description: "Elegancia francesa deportiva." },
    { id: 101, name: "LACOSTE ELITE ACTIVE BLUE YELLOW", price: 299, category: "hombres", brand: "Lacoste", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Lacoste+Blue", description: "Colores vivos y clásicos." },
    { id: 102, name: "LACOSTE ELITE ACTIVE ORANGE", price: 299, category: "hombres", brand: "Lacoste", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Lacoste+Orange", description: "Estilo vibrante." },
    { id: 103, name: "LACOSTE ELITE ACTIVE WHITE NAVY", price: 299, category: "hombres", brand: "Lacoste", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Lacoste+White", description: "El clásico blanco y azul marino." },
    { id: 104, name: "LACOSTE ELITE ACTIVE WHITE RED", price: 299, category: "hombres", brand: "Lacoste", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Lacoste+Red", description: "Detalles rojos deportivos." },
    { id: 105, name: "LACOSTE ELITE ACTIVE LIGHT BLUE", price: 299, category: "hombres", brand: "Lacoste", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Lacoste+LightBlue", description: "Tono celeste veraniego." },
    { id: 106, name: "LACOSTE ELITE ACTIVE BEIGE GREEN", price: 299, category: "hombres", brand: "Lacoste", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Lacoste+Beige", description: "Tonos tierra sofisticados." },

    // --- AIR MAX (DN, PULSE, 97, 95, PLUS) ---
    { id: 107, name: "NIKE AIR MAX DN-2 BLACK WHITE", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=DN2+Black", description: "La nueva era del Air." },
    { id: 108, name: "NIKE AIR MAX DN-2 WHITE", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=DN2+White", description: "Diseño limpio y futurista." },
    { id: 109, name: "NIKE AIR MAX DN PREMIUM ELECTRIC", price: 359, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=DN+Electric", description: "Colores eléctricos impactantes." },
    { id: 110, name: "NIKE AIR MAX DN BLACK WHITE", price: 349, category: "mujeres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIQCqufCnySv1t8kGsnaLd9P54YS8nDv-6A&s", description: "Contraste clásico en silueta moderna." },
    { id: 111, name: "NIKE AIR MAX DN SMOKE PURPLE", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=DN+Purple", description: "Tono humo púrpura exclusivo." },
    { id: 112, name: "NIKE AIR MAX DN BLACK METALLIC", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=DN+Metallic", description: "Acabado metálico oscuro." },
    { id: 113, name: "NIKE AIR MAX PULSE ROAM GOLD", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Pulse+Gold", description: "Detalles dorados de lujo." },
    { id: 114, name: "NIKE AIR MAX PULSE ROAM BLUE", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Pulse+Blue", description: "Azul intenso para la ciudad." },
    { id: 115, name: "NIKE AIR MAX PULSE ROAM METALLIC", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Pulse+Metallic", description: "Brillo metálico urbano." },
    { id: 116, name: "NIKE AIR MAX PULSE ROAM LIGHT BONE", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Pulse+Bone", description: "Tono hueso neutro." },
    { id: 117, name: "NIKE AIR MAX PULSE ROAM DARK GREY", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Pulse+Grey", description: "Gris oscuro versátil." },
    { id: 118, name: "NIKE AIR MAX PLUS BLACK SILVER", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=TN+Silver", description: "El clásico TN en plata y negro." },
    { id: 119, name: "NIKE AIR MAX PLUS TOTAL BLACK", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=TN+TotalBlack", description: "Estilo agresivo todo negro." },
    { id: 120, name: "NIKE AIR MAX 97 TRIPLE BLACK", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=97+Black", description: "Líneas onduladas icónicas en negro." },
    { id: 121, name: "NIKE AIR MAX 97 TRIPLE WHITE", price: 349, category: "mujeres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2021/09/Otros-1.png?fit=1024%2C1024&ssl=1", description: "Pureza y velocidad." },
    { id: 122, name: "NIKE AIR MAX 95 ESSENTIAL TRAINER", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AM95", description: "Diseño anatómico legendario." },
    { id: 123, name: "NIKE AIR MAX DAWN BLACK", price: 319, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Dawn+Black", description: "Estilo retro-running simple." },
    { id: 124, name: "NIKE AIR MAX SHOX TRIPLE BLACK", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Shox+Black", description: "Fusión de tecnologías en negro." },
    { id: 125, name: "NIKE AIR MAX SHOX TRIPLE WHITE", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Shox+White", description: "Estilo limpio y amortiguado." },

    // --- NIKE RUNNING (V2K, MOTIVA, INVINCIBLE) ---
    { id: 126, name: "NIKE V2K RUN LIGHT OREWOOD", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=V2K+Orewood", description: "Estilo vintage running." },
    { id: 127, name: "NIKE V2K RUN TRIPLE BLACK", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=V2K+Black", description: "Retro tech en negro." },
    { id: 128, name: "NIKE MOTIVA LIGHT SILVER GREEN", price: 319, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Motiva+Silver", description: "Diseñadas para caminar y trotar." },
    { id: 129, name: "NIKE MOTIVA RACER BLUE", price: 319, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Motiva+Blue", description: "Impulso en cada paso." },
    { id: 130, name: "NIKE MOTIVA SUMMIT WHITE", price: 319, category: "mujeres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2021/09/21.png?fit=1024%2C1024&ssl=1", description: "Comodidad máxima diaria." },
    { id: 131, name: "NIKE MOTIVA BLACK ANTHRACITE", price: 319, category: "mujeres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2024/01/36.png?fit=1024%2C1024&ssl=1", description: "Discreción y confort." },
    { id: 132, name: "NIKE ZOOMX INVINCIBLE 3 YEAR", price: 359, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Invincible+Year", description: "Máxima amortiguación ZoomX." },
    { id: 133, name: "NIKE ZOOMX INVINCIBLE 3 FLYKNIT", price: 359, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Invincible+Flyknit", description: "Ajuste perfecto y rebote." },
    { id: 134, name: "NIKE INVINCIBLE 3 WHITE CRIMSON RED", price: 359, category: "hombres", brand: "Nike", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Invincible+Crimson", description: "Energía en color rojo y blanco." },

    // --- JORDAN RETRO & TRAVIS SCOTT ---
    { id: 135, name: "AIR JORDAN RETRO 3 OFF NOIR", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ3+OffNoir", description: "Elegancia en materiales premium." },
    { id: 136, name: "AIR JORDAN RETRO 4 FIREWOOD", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ4+Firewood", description: "Colores cálidos en silueta clásica." },
    { id: 137, name: "AIR JORDAN 1 DARK PONY", price: 349, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ1+Pony", description: "Texturas únicas." },
    { id: 138, name: "AIR JORDAN 1 BLACK ELEPHANT", price: 349, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ1+Elephant", description: "El icónico estampado elefante." },
    { id: 139, name: "AIR JORDAN 1 TRAVIS SCOTT MEDIUM", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Travis+Medium", description: "Colaboración exclusiva Travis Scott." },
    { id: 140, name: "AIR JORDAN 1 TRAVIS SCOTT FRAGMENT", price: 399, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Travis+Fragment", description: "El diseño de Fragment x Travis." },
    { id: 141, name: "AIR JORDAN RETRO 3 TRAVIS SCOTT", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ3+Travis", description: "Estilo Cactus Jack en AJ3." },
    { id: 142, name: "AIR JORDAN 1 LOW CONCORD", price: 339, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ1+Concord", description: "Inspirado en las AJ11 Concord." },
    { id: 143, name: "AIR JORDAN 1 LOW REVERSE BRED", price: 339, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ1+RevBred", description: "Rojo y negro invertido." },
    { id: 144, name: "AIR JORDAN RETRO 3 LASER ORANGE", price: 359, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ3+Laser", description: "Detalles naranja láser vibrantes." },
    { id: 145, name: "AIR JORDAN RETRO 3 J BALVIN BLACK", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=JBalvin+Black", description: "Medellín vibe en negro." },
    { id: 146, name: "AIR JORDAN RETRO 3 J BALVIN SUNSET", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=JBalvin+Sunset", description: "Degradado atardecer exclusivo." },
    { id: 147, name: "AIR JORDAN 1 RETRO HIGH SPIDERMAN", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Spiderman", description: "Edición Across the Spider-Verse." },
    { id: 148, name: "AIR JORDAN RETRO 4 YELLOW THUNDER", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Thunder", description: "Amarillo eléctrico y negro." },
    { id: 149, name: "AIR JORDAN RETRO 4 FROZEN MOMENTS", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Frozen", description: "Tonos fríos y metálicos." },
    { id: 150, name: "AIR JORDAN RETRO 3 BLACK CAT", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ3+BlackCat", description: "Triple negro en AJ3." },
    { id: 151, name: "AIR JORDAN RETRO 4 PINE GREEN", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=PineGreen", description: "Edición SB x Jordan." },
    { id: 152, name: "AIR JORDAN 1 TRAVIS SCOTT OLIVE", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Travis+Olive", description: "Swoosh invertido en oliva." },
    { id: 153, name: "AIR JORDAN 1 TRAVIS SCOTT BLACK PHANTOM", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Phantom", description: "Negro total con costuras blancas." },
    { id: 154, name: "AIR JORDAN 1 TRAVIS SCOTT DARK MOCHA", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=DarkMocha", description: "Tonos tierra esenciales." },
    { id: 155, name: "AIR JORDAN RETRO 3 UNC", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ3+UNC", description: "Azul universitario clásico." },
    { id: 156, name: "AIR JORDAN RETRO 13 BLACK CAT", price: 359, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ13+BlackCat", description: "Inspirado en la pantera." },
    { id: 157, name: "AIR JORDAN RETRO 4 MILITARY BLACKK", price: 369, category: "mujeres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://cdn-images.farfetch-contents.com/18/46/38/53/18463853_40222049_1000.jpg", description: "Bloque de color limpio." },
    { id: 158, name: "AIR JORDAN 1 TRAVIS SCOTT REVERSE MOCHA", price: 389, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=ReverseMocha", description: "Colores invertidos exclusivos." },
    { id: 159, name: "AIR JORDAN RETRO 3 BLACK CEMENT", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=BlackCement", description: "Uno de los mejores de la historia." },
    { id: 160, name: "AIR JORDAN RETRO 4 WHITE OREO", price: 349, category: "mujeres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2022/02/r-2.png?fit=1024%2C1024&ssl=1", description: "Blanco moteado premium." },
    { id: 161, name: "AIR JORDAN 1 LOW TRIPLE WHITE", price: 329, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ1+Low+White", description: "Jordan 1 Low impecable." },
    { id: 162, name: "AIR JORDAN RETRO 4 RED THUNDER", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=RedThunder", description: "Rojo carmesí y negro." },
    { id: 163, name: "AIR JORDAN RETRO 1 HIGH TRAVIS SCOTT", price: 399, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Travis+High", description: "El High OG original con bolsillo." },
    { id: 164, name: "AIR JORDAN RETRO 4 BLACK CAT", price: 339, category: "mujeres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://i0.wp.com/goldenstoreperu.com/wp-content/uploads/2023/07/aa-4.png?fit=1024%2C1024&ssl=1", description: "Nubuck negro total." },
    { id: 165, name: "AIR JORDAN RETRO 4 UNIVERSITY BLUE", price: 369, category: "hombres", brand: "Jordan", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=AJ4+UniBlue", description: "Gamuza azul universitaria." },

    // --- NEW BALANCE, ADIDAS, LOUIS VUITTON, DUNK, SHOX R4 ---
    { id: 166, name: "NEW BALANCE 1906 SILVER METALLIC", price: 329, category: "hombres", brand: "New Balance", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=NB1906+Silver", description: "Estilo técnico 2000s." },
    { id: 167, name: "NEW BALANCE 1906 TRIPLE BLACK", price: 329, category: "hombres", brand: "New Balance", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=NB1906+Black", description: "Protección y estilo oscuro." },
    { id: 168, name: "NEW BALANCE 530 WHITE GREY NAVY", price: 319, category: "mujeres", brand: "New Balance", type: "zapatillas", style: "deportivos", img: "https://dripstore.pe/cdn/shop/files/Diseno_sin_titulo_27.png?v=1733287901", description: "El papá shoe por excelencia." },
    { id: 169, name: "NIKE DUNK LOW JARRITOS", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Jarritos", description: "Colaboración con la bebida mexicana." },
    { id: 170, name: "NIKE DUNK LOW RETRO 'PANDA'", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Dunk+Panda", description: "El Dunk más popular." },
    { id: 171, name: "NIKE DUNK LOW GREY FOG", price: 329, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Dunk+Grey", description: "Gris niebla versátil." },
    { id: 172, name: "NIKE DUNK SB TRAVIS SCOTT", price: 399, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Dunk+Travis", description: "Textura bandana y cuadros." },
    { id: 173, name: "NIKE SHOX R4 TRIPLE WHITE", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=ShoxR4+White", description: "Futurismo blanco." },
    { id: 174, name: "NIKE SHOX R4 BLACK SILVER", price: 339, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=ShoxR4+Silver", description: "El colorway original." },
    { id: 175, name: "NIKE SHOX SUPREME RIDE 2 RED", price: 349, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Shox+Supreme", description: "Colaboración Supreme." },
    { id: 176, name: "NIKE AIR MORE UPTEMPO BLACK", price: 369, category: "hombres", brand: "Nike", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Uptempo+OG", description: "AIR en grande." },
    { id: 177, name: "ADIDAS ARVYN TOTAL BLACK", price: 309, category: "hombres", brand: "Adidas", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Arvyn+Black", description: "Comodidad Adidas moderna." },
    { id: 178, name: "ADIDAS ARVYN BLACK CARBON", price: 309, category: "hombres", brand: "Adidas", type: "zapatillas", style: "deportivos", img: "https://via.placeholder.com/300x300?text=Arvyn+Carbon", description: "Detalles carbono." },
    { id: 179, name: "ADIDAS CAMPUS 'WILD MOSS' BAD BUNNY", price: 339, category: "hombres", brand: "Adidas", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Campus+Moss", description: "Verde musgo texturizado." },
    { id: 180, name: "ADIDAS CAMPUS LIGHT BAD BUNNY", price: 349, category: "hombres", brand: "Adidas", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=Campus+Light", description: "Color crema suave." },
    { id: 181, name: "ADIDAS NITE JOGGER TOTAL BLACK", price: 319, category: "hombres", brand: "Adidas", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=NiteJogger+Black", description: "Reflectante y oscuro." },
    { id: 182, name: "ADIDAS NITE JOGGER BEIGE DETAILING", price: 329, category: "hombres", brand: "Adidas", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=NiteJogger+Beige", description: "Tonos tierra con brillo." },
    { id: 183, name: "ADIDAS NITE JOGGER BOLD GREEN", price: 329, category: "hombres", brand: "Adidas", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=NiteJogger+Green", description: "Verde audaz." },
    { id: 184, name: "LOUIS VUITTON LV TRAINER BLUE", price: 349, category: "hombres", brand: "Louis Vuitton", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=LV+Blue", description: "Lujo en cada detalle." },
    { id: 185, name: "LOUIS VUITTON LV TRAINER WHITE BLACK", price: 349, category: "hombres", brand: "Louis Vuitton", type: "zapatillas", style: "urbanas", img: "https://via.placeholder.com/300x300?text=LV+WhiteBlack", description: "Monograma icónico." }

];
// ============================================
// FUNCIONES DE NAVEGACIÓN Y CARRITO
// ============================================
function loadCartFromStorage() {
    const stored = localStorage.getItem('jk_urban_cart');
    if (stored) { try { cart = JSON.parse(stored); } catch (e) { cart = []; } }
}

function saveCartToStorage() { localStorage.setItem('jk_urban_cart', JSON.stringify(cart)); }

function updateCartCounter() {
    const counter = document.getElementById('cart-counter');
    if (counter) counter.innerText = cart.length;
}

function irAlDetalle(productId) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = `product-detail.html?id=${productId}`;
    }, 300);
}

/// ============================================
// LÓGICA DE LA PÁGINA DE INICIO (CON AUTO-PLAY)
// ============================================

// Variables para el carrusel
let carouselIndex = 0;
let autoSlideInterval; // Variable para guardar el temporizador

function loadHomePage() {
    const bestsellersGrid = document.getElementById('bestsellers-grid');
    
    if (bestsellersGrid) {
        // 1. Cargar productos
        const bestsellers = productsDB.slice(0, 10);
        
        bestsellersGrid.innerHTML = bestsellers.map(p => `
            <div class="carousel-item" onclick="irAlDetalle(${p.id})" style="cursor: pointer;">
                <div class="carousel-img-container">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <p class="tag-bestseller">BESTSELLER</p>
                <h3>${p.name}</h3>
                <span class="carousel-price">S/ ${p.price.toFixed(2)}</span>
            </div>
        `).join('');

        // 2. Iniciar el movimiento automático
        startAutoSlide();

        // 3. Pausar cuando el mouse está encima (para que el usuario pueda hacer clic tranquilo)
        const container = document.querySelector('.carousel-container');
        if (container) {
            container.addEventListener('mouseenter', stopAutoSlide);
            container.addEventListener('mouseleave', startAutoSlide);
        }
    }
}

// Función para mover el carrusel (Flechas y Auto)
function moveCarousel(direction) {
    const track = document.getElementById('bestsellers-grid');
    const items = document.querySelectorAll('.carousel-item');
    
    if (!track || items.length === 0) return;

    // Calcular cuántos items se ven en pantalla
    const itemsVisible = window.innerWidth <= 600 ? 1 : (window.innerWidth <= 1024 ? 3 : 5);
    const itemWidth = 100 / itemsVisible; 
    const maxIndex = items.length - itemsVisible;

    carouselIndex += direction;

    // Reiniciar infinito (Loop)
    if (carouselIndex < 0) carouselIndex = maxIndex;
    if (carouselIndex > maxIndex) carouselIndex = 0;

    // Mover el track
    const translateX = -(carouselIndex * itemWidth);
    track.style.transform = `translateX(${translateX}%)`;
}

// --- FUNCIONES NUEVAS PARA EL AUTO-PLAY ---

function startAutoSlide() {
    // Evitar múltiples intervalos
    stopAutoSlide(); 
    // Mover cada 3 segundos (3000 ms)
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 1700); 
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// ============================================
// 4. ACTUALIZAR LA CARGA DE PÁGINA (DOMContentLoaded)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    updateCartCounter();
    setActiveMenuItem(); 

    const path = window.location.pathname;
    
    if (document.getElementById('bestsellers-grid')) {
        loadHomePage();
    }
    else if (path.includes('product-detail.html')) {
        loadProductDetailPage();
    } 
    else if (path.includes('carrito.html')) {
        renderCartPage();
    } 
    // ESTA ES LA PARTE IMPORTANTE PARA EL FILTRO AUTOMÁTICO
    else if (document.getElementById('products-grid')) {
        initializeFilters(); // 1. Crear checkboxes
        applyUrlFilters();   // 2. Marcar checkbox según URL (?gender=hombres)
        applyFilters();      // 3. Filtrar productos
    }
});
// ============================================
// LÓGICA DE FILTRADO Y PAGINACIÓN
// ============================================
function initializeFilters() {
    // Filtro por Tipo
    const typeFilterContainer = document.getElementById('type-filter');
    if (typeFilterContainer) {
        const types = [...new Set(productsDB.map(p => p.type || ''))].filter(Boolean);
        typeFilterContainer.innerHTML = types.map(type => `
            <div class="filter-option">
                <input type="checkbox" id="type-${type}" value="${type}" onchange="applyFilters()">
                <label for="type-${type}">${type.charAt(0).toUpperCase() + type.slice(1)}</label>
            </div>
        `).join('');
    }
    
    // Filtro por Género
    const genderFilterContainer = document.getElementById('gender-filter');
    if (genderFilterContainer) {
        const genders = [...new Set(productsDB.map(p => p.category))];
        const genderLabels = { 'hombres': 'Hombres', 'mujeres': 'Mujeres', 'niños': 'Niños' };
        genderFilterContainer.innerHTML = genders.map(category => `
            <div class="filter-option">
                <input type="checkbox" id="cat-${category}" value="${category}" onchange="applyFilters()">
                <label for="cat-${category}">${genderLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)}</label>
            </div>
        `).join('');
    }

    // Filtro por Estilo
    const styleFilterContainer = document.getElementById('style-filter');
    if (styleFilterContainer) {
        const styles = [...new Set(productsDB.map(p => p.style || ''))].filter(Boolean);
        styleFilterContainer.innerHTML = styles.map(style => `
            <div class="filter-option">
                <input type="checkbox" id="style-${style}" value="${style}" onchange="applyFilters()">
                <label for="style-${style}">${style.charAt(0).toUpperCase() + style.slice(1)}</label>
            </div>
        `).join('');
    }
    
    // Marca
    const brandFilterContainer = document.getElementById('brands-filter');
    if (brandFilterContainer) {
        const brands = [...new Set(productsDB.map(p => p.brand))];
        brandFilterContainer.innerHTML = brands.map(brand => `
            <div class="filter-option">
                <input type="checkbox" id="brand-${brand}" value="${brand}" onchange="applyFilters()">
                <label for="brand-${brand}">${brand}</label>
            </div>
        `).join('');
    }
}
// ============================================
// 2. NUEVA FUNCIÓN: ANIMACIÓN BÚSQUEDA
// ============================================
function toggleSearch() {
    const searchBox = document.querySelector('.search-box');
    const input = document.getElementById('nav-search-input');
    
    searchBox.classList.toggle('active');
    
    if (searchBox.classList.contains('active')) {
        input.focus(); // Poner el cursor para escribir
    } else {
        input.value = ''; // Limpiar si se cierra
        applyFilters();   // Resetear filtros
    }
}
// LÓGICA DE BÚSQUEDA GLOBAL
document.addEventListener('keyup', function(e) {
    if (e.target && e.target.id === 'nav-search-input') {
        
        // A. Si estamos en la página de productos, filtra en tiempo real
        if (document.getElementById('products-grid')) {
            applyFilters();
        }

        // B. Si presiona ENTER, redirigir a productos.html con la búsqueda
        if (e.key === 'Enter') {
            const term = e.target.value.trim();
            if (term) {
                // Redirige enviando el término en la URL (?search=nike)
                window.location.href = `productos.html?search=${encodeURIComponent(term)}`;
            }
        }
    }
});
function applyUrlFilters() {
    const params = new URLSearchParams(window.location.search);
    
    // 1. Aplicar filtro de Género (?gender=hombres)
    const genderParam = params.get('gender'); 
    if (genderParam) {
        const checkboxId = `cat-${genderParam}`; 
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) checkbox.checked = true;
    }

    // 2. Aplicar filtro de Búsqueda (?search=nike)
    const searchParam = params.get('search');
    if (searchParam) {
        const searchInput = document.getElementById('nav-search-input');
        const searchBox = document.querySelector('.search-box');
        
        if (searchInput) {
            searchInput.value = searchParam; // Pone el texto en la caja
            // Opcional: Expandir la caja visualmente
            if(searchBox) searchBox.classList.add('active');
            searchInput.focus();
        }
    }
}
// ============================================
// 1. NUEVA FUNCIÓN: LEER URL Y MARCAR FILTRO
// ============================================
function applyUrlFilters() {
    // Obtiene los parámetros de la URL (ej: ?gender=hombres)
    const params = new URLSearchParams(window.location.search);
    const genderParam = params.get('gender'); 

    if (genderParam) {
        // Busca el checkbox con ID 'cat-hombres', 'cat-mujeres', etc.
        const checkboxId = `cat-${genderParam}`; 
        const checkbox = document.getElementById(checkboxId);

        if (checkbox) {
            checkbox.checked = true; // Lo marca automáticamente
        }
    }
}

function generateProductCard(product) {
    return `
        <div class="card" onclick="irAlDetalle(${product.id})">
            <div class="img-container">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="card-body">
                <h3>${product.name}</h3>
                <p class="brand">${product.brand}</p>
                <span class="price">S/ ${product.price.toFixed(2)}</span>
                <button class="btn-add" onclick="event.stopPropagation(); addToCart(${product.id})">Agregar</button>
            </div>
        </div>
    `;
}

// Variable global para controlar la página actual
// Asegúrate de que esta línea esté al inicio de tu archivo JS
// let currentPage = 1; 

function renderPagination(totalPages) {
    const container = document.getElementById('pagination-container');
    
    // Si no existe el contenedor, salimos para evitar errores
    if (!container) return;

    // Si solo hay 1 página, no mostramos botones (opcional, puedes quitar este if si quieres ver el '1')
    if (totalPages <= 1) { 
        container.innerHTML = ''; 
        return; 
    }

    let html = '';

    // --- Botón PREV ---
    // Se deshabilita si estamos en la página 1
    html += `
        <button class="page-btn" 
                ${currentPage === 1 ? 'disabled' : ''} 
                onclick="changePage(${currentPage - 1})">
            Prev
        </button>
    `;

    // --- Números de Página ---
    for (let i = 1; i <= totalPages; i++) {
        // Agregamos la clase 'active' si es la página actual
        html += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }

    // --- Botón NEXT ---
    // Se deshabilita si estamos en la última página
    html += `
        <button class="page-btn" 
                ${currentPage === totalPages ? 'disabled' : ''} 
                onclick="changePage(${currentPage + 1})">
            Next
        </button>
    `;

    container.innerHTML = html;
}

function changePage(page) {
    // Validar que la página sea un número válido
    if (page < 1) return;
    
    // Actualizamos la variable global
    currentPage = page;
    
    // Recargamos los filtros para mostrar los nuevos productos
    applyFilters();
    
    // Llevamos la pantalla suavemente hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// CARGA DE PÁGINAS (HOME / DETALLE / PRODUCTOS)
// ============================================
// ============================================
// CARGA DE PÁGINAS (ACTUALIZADO)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    updateCartCounter();
    setActiveMenuItem(); 

    const path = window.location.pathname;
    
    // 1. Detección para Home
    if (document.getElementById('bestsellers-grid')) {
        loadHomePage();
    }
    // 2. Detección para Detalle
    else if (path.includes('product-detail.html')) {
        loadProductDetailPage();
    } 
    // 3. Detección para Carrito
    else if (path.includes('carrito.html')) {
        renderCartPage();
    } 
    // 4. Detección para Catálogo (Aquí está el cambio clave)
    else if (document.getElementById('products-grid')) {
        initializeFilters(); // A. Crea los checkboxes HTML
        applyUrlFilters();   // B. (NUEVO) Marca el checkbox basado en la URL (?gender=hombres)
        applyFilters();      // C. Muestra los productos filtrados
    }
});

// NUEVO: Variables para detalle de producto
// ============================================
// LÓGICA DE PÁGINA DE DETALLE
// ============================================
let currentProduct = null;
let selectedSize = null;

function loadProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Buscar producto en la base de datos
    currentProduct = productsDB.find(p => p.id === productId);

    if (currentProduct) {
        // 1. Inyectar Imagen Principal
        const mainImgContainer = document.getElementById('main-img-container');
        mainImgContainer.innerHTML = `<img id="main-product-img" src="${currentProduct.img}" alt="${currentProduct.name}">`;

        // 2. Inyectar Miniaturas (Simuladas con la misma imagen para este ejemplo)
        const thumbList = document.getElementById('thumbnail-list');
        thumbList.innerHTML = `
            <img class="thumb-img active" src="${currentProduct.img}" onclick="changeMainImage(this.src)">
            <img class="thumb-img" src="${currentProduct.img}" onclick="changeMainImage(this.src)" style="filter: brightness(0.9)">
            <img class="thumb-img" src="${currentProduct.img}" onclick="changeMainImage(this.src)" style="filter: brightness(0.8)">
        `;

        // 3. Inyectar Información del Producto
        const infoContent = document.getElementById('product-info-content');
        infoContent.innerHTML = `
            <span class="tag-alt">${currentProduct.tag ? currentProduct.tag : 'Oferta'}</span>
            <h1>${currentProduct.name}</h1>
            <div class="brand-label" style="color: #888; font-weight: 600; margin-bottom: 10px;">
                Marca: ${currentProduct.brand} | Modelo: ${currentProduct.style || 'Urbano'}
            </div>
            <p class="detail-price">S/ ${currentProduct.price.toFixed(2)}</p>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                ${currentProduct.description || 'Las mejores zapatillas con estilo las encuentras en JK URBAN. Calidad premium y comodidad garantizada para tu día a día.'}
            </p>
            
            <ul class="benefit-list">
                <li>Envío <b>gratis</b> a Lima y Callao.</li>
                <li>Entrega rápida en 24-48 horas.</li>
                <li>Garantía de cambio de talla.</li>
            </ul>
        `;

        // 4. Generar Botones de Talla (Dinámicamente)
        const sizeContainer = document.querySelector('.size-options');
        // Tallas disponibles (puedes personalizar esto por producto si tuvieras el dato en DB)
        const sizes = ['38', '39', '40', '41', '42', '43']; 
        
        sizeContainer.innerHTML = sizes.map(size => 
            `<button class="size-btn" onclick="selectSize(this, '${size}')">${size}</button>`
        ).join('');

        // 5. Cargar Productos Relacionados (Misma marca o categoría)
        loadRelatedProducts(currentProduct);
    } else {
        document.querySelector('.product-detail-container').innerHTML = '<h2>Producto no encontrado</h2>';
    }
}

// Función para seleccionar talla
function selectSize(btnElement, size) {
    // 1. Quitar selección previa
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected'));
    
    // 2. Marcar nuevo
    btnElement.classList.add('selected');
    selectedSize = size;

    // 3. Activar botón de añadir
    const addBtn = document.querySelector('.btn-cart-main');
    addBtn.classList.add('ready');
    addBtn.innerText = "AÑADIR AL CARRITO";
    addBtn.disabled = false;
}

// Función para cambiar imagen principal (Visual)
function changeMainImage(src) {
    document.getElementById('main-product-img').src = src;
}

// Función para cargar relacionados
function loadRelatedProducts(current) {
    const relatedGrid = document.getElementById('related-grid');
    if(!relatedGrid) return;

    // Filtrar productos de la misma marca, excluyendo el actual
    let related = productsDB.filter(p => p.brand === current.brand && p.id !== current.id);
    
    // Si hay pocos, rellenar con cualquier otro
    if (related.length < 3) {
        const others = productsDB.filter(p => p.id !== current.id);
        related = related.concat(others);
    }

    // Tomar solo 3
    const toShow = related.slice(0, 3);

    relatedGrid.innerHTML = toShow.map(p => `
        <div class="card" onclick="irAlDetalle(${p.id})">
            <div class="img-container">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="card-body">
                <h3>${p.name}</h3>
                <span class="price">S/ ${p.price.toFixed(2)}</span>
                <button class="btn-add">VER</button>
            </div>
        </div>
    `).join('');
}

// Función corregida de añadir al carrito
function addToCartFromDetail() {
    if (!selectedSize) {
        alert('⚠️ Por favor selecciona una talla antes de añadir.');
        return;
    }
    
    // Usar la función global de carrito
    // Nota: Aquí modificamos ligeramente la lógica para incluir talla si tu carrito lo soporta
    // Si no, usa la función estándar
    loadCartFromStorage();
    
    const existing = cart.find(item => item.id === currentProduct.id && item.size === selectedSize);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            img: currentProduct.img,
            brand: currentProduct.brand,
            quantity: 1,
            size: selectedSize // Importante: Guardar la talla
        });
    }
    
    saveCartToStorage();
    updateCartCounter();
    
    // Feedback visual
    const btn = document.querySelector('.btn-cart-main');
    const originalText = btn.innerText;
    btn.innerText = "¡AÑADIDO! ✅";
    setTimeout(() => {
        btn.innerText = originalText;
    }, 2000);
}

function enviarPedidoWhatsApp() {
    if (!currentProduct) return;
    const sizeText = selectedSize ? ` (Talla: ${selectedSize})` : '';
    const msg = `Hola JK URBAN, deseo comprar: ${currentProduct.name}${sizeText} - Precio: S/ ${currentProduct.price}`;
    window.open(`https://wa.me/945105822?text=${encodeURIComponent(msg)}`);
}

// ============================================
// FUNCIONES DEL CARRITO
// ============================================
function irAlCarrito() {
    window.location.href = 'carrito.html';
}

function addToCart(id) {
    loadCartFromStorage();
    const product = productsDB.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id); 
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, brand: product.brand || '', quantity: 1, size: '40' }); 
    }
    saveCartToStorage();
    updateCartCounter();
    if (window.location.pathname.includes('carrito.html')) renderCartPage();
}

function removeFromCart(id) {
    loadCartFromStorage();
    cart = cart.filter(i => i.id !== id);
    saveCartToStorage();
    updateCartCounter();
    renderCartPage();
}

function changeQuantity(id, qty) {
    loadCartFromStorage();
    const item = cart.find(i => i.id === id);
    if (!item) return;
    const q = parseInt(qty) || 0;
    if (q <= 0) {
        removeFromCart(id);
        return;
    }
    item.quantity = q;
    saveCartToStorage();
    updateCartCounter();
    renderCartPage();
}

function renderCartPage() {
    loadCartFromStorage();
    
    const list = document.getElementById('cart-items-list');
    const summary = document.getElementById('cart-summary');
    const totalItemsBadge = document.getElementById('cart-total-items');

    if (!list || !summary) return;

    // Actualizar contador visual
    if(totalItemsBadge) totalItemsBadge.innerText = `${cart.length} artículos`;

    // CASO: CARRITO VACÍO
    if (!cart || cart.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding: 4rem 0;">
                <i class="fas fa-shopping-basket" style="font-size: 4rem; color: #ddd; margin-bottom: 1rem;"></i>
                <h2>Tu carrito está vacío</h2>
                <p style="color:#777; margin-bottom: 2rem;">¡Explora nuestras colecciones y encuentra tus zapatillas ideales!</p>
                <a href="productos.html" class="btn-checkout" style="display:inline-block; width:auto; text-decoration:none;">VER CATÁLOGO</a>
            </div>
        `;
        summary.innerHTML = ''; 
        summary.parentElement.style.display = 'none'; 
        return;
    }

    // CASO: CARRITO CON PRODUCTOS
    summary.parentElement.style.display = 'block';

    const itemsHtml = cart.map(item => `
        <div class="cart-item-card">
            <div class="cart-img-box">
                <img src="${item.img}" alt="${item.name}">
            </div>

            <div class="cart-info-box">
                <div>
                    <h3>${item.name}</h3>
                    <div class="meta">
                        <span>${item.brand}</span> | 
                        <span>Talla: ${item.size || 'STD'}</span>
                    </div>
                </div>
                
                <div class="qty-control">
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <input class="qty-input" type="text" value="${item.quantity}" readonly>
                    <button class="qty-btn" onclick="changeQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>

            <div class="cart-price-box">
                <button class="btn-delete" onclick="removeFromCart(${item.id})" title="Eliminar">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <div class="item-total-price">
                    S/ ${(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
        </div>
    `).join('');

    list.innerHTML = itemsHtml;

    // CÁLCULOS DEL RESUMEN
    const subtotal = cart.reduce((s, it) => s + (it.price * (it.quantity || 1)), 0);
    const shipping = 15.00; 
    const total = subtotal + shipping;

    // AQUÍ ESTÁN LOS CAMBIOS CLAVE EN LOS BOTONES:
    summary.innerHTML = `
        <h2>Resumen del Pedido</h2>
        
        <div class="summary-row">
            <span>Subtotal</span>
            <span>S/ ${subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-row">
            <span>Envío estimado</span>
            <span>S/ ${shipping.toFixed(2)}</span>
        </div>
        
        <div class="coupon-box">
            <input type="text" placeholder="Código de descuento">
            <button onclick="mostrarAlerta('La función de cupones estará disponible próximamente.', 'Cupones')">APLICAR</button>
        </div>

        <div class="summary-row total">
            <span>TOTAL</span>
            <span>S/ ${total.toFixed(2)}</span>
        </div>

        <button class="btn-checkout" onclick="mostrarAlerta('El sistema de pago está en mantenimiento. Por favor completa tu compra por WhatsApp.', 'Sistema de Pago')">
            IR A PAGAR
        </button>
        
        <button class="btn-wsp-cart" onclick="pedidoWhatsAppCart()">
            <i class="fab fa-whatsapp"></i> Completar pedido por WhatsApp
        </button>

        <p style="text-align:center; font-size:0.8rem; color:#888; margin-top:15px;">
            <i class="fas fa-lock"></i> Pago 100% Seguro
        </p>
    `;
}

function pedidoWhatsAppCart() {
    loadCartFromStorage();
    if (!cart || cart.length === 0) return;
    const lines = cart.map(i => `${i.name} ${i.size ? '(Talla '+i.size+')' : ''} x${i.quantity} (S/ ${ (i.price * i.quantity).toFixed(0) })`);
    const total = cart.reduce((s, it) => s + (it.price * (it.quantity || 1)), 0);
    const msg = `Hola JK URBAN, quiero pedir:\n${lines.join('\n')}\nTotal: S/ ${total.toFixed(2)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
}

// ============================================
// FUNCIONES DE WHATSAPP MODAL
// ============================================
function abrirWhatsApp() {
    const modal = document.getElementById('whatsapp-modal');
    if (modal) modal.classList.add('active');
}

function cerrarWhatsApp() {
    const modal = document.getElementById('whatsapp-modal');
    if (modal) modal.classList.remove('active');
}

// ============================================
// FUNCIONES DE WHATSAPP MODAL (INTERACTIVO)
// ============================================

function enviarMensajeWhatsApp() {
    const input = document.getElementById('whatsapp-input');
    // 1. Validar que haya texto
    if (!input || !input.value.trim()) return;
    
    const msg = input.value.trim();
    const messagesContainer = document.getElementById('whatsapp-messages');
    
    // 2. Mostrar el mensaje del USUARIO en el chat
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'message user-message';
    userMsgDiv.innerHTML = `<p>${msg}</p>`;
    messagesContainer.appendChild(userMsgDiv);
    
    // Limpiar input y bajar scroll
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // --- SECUENCIA DE RESPUESTAS AUTOMÁTICAS ---

    // PASO 1: Mensaje de "Con gusto le atenderemos" (Aparece al 1 segundo)
    setTimeout(() => {
        const botMsg1 = document.createElement('div');
        botMsg1.className = 'message bot-message';
        botMsg1.innerHTML = `<p>¡Gracias! Con mucho gusto atenderemos tu consulta. 😊</p>`;
        messagesContainer.appendChild(botMsg1);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Bajar scroll

        // PASO 2: Mensaje de "Redirigiendo..." (Aparece 1.5 segundos después del anterior)
        setTimeout(() => {
            const botMsg2 = document.createElement('div');
            botMsg2.className = 'message bot-message';
            botMsg2.innerHTML = `<p>Te estamos redirigiendo con nuestros agentes de soporte al cliente... ⏳</p>`;
            messagesContainer.appendChild(botMsg2);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // PASO 3: Abrir WhatsApp Real (Aparece 2 segundos después del último mensaje)
            setTimeout(() => {
                const countryCode = "51"; 
                // Usa tu variable global o el número directo si prefieres
                const number = (typeof WHATSAPP_NUMBER !== 'undefined') ? WHATSAPP_NUMBER : "945105822";
                
                const url = `https://wa.me/${countryCode}${number}?text=${encodeURIComponent(msg)}`;
                window.open(url, '_blank');
            }, 2000);

        }, 1500);

    }, 1000);
}

function clearAllFilters() {
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    const sizeSelect = document.getElementById('size-filter');
    if (sizeSelect) sizeSelect.value = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    applyFilters();
}
// ============================================
// FUNCION PARA RESALTAR EL MENÚ ACTIVO
// ============================================
function setActiveMenuItem() {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search; // Para capturar ?gender=hombres
    const navLinks = document.querySelectorAll('.navbar .nav-link');

    navLinks.forEach(link => {
        // Obtenemos la ruta y los parámetros del enlace
        const linkHref = link.getAttribute('href');
        
        // Limpiamos la clase activa primero
        link.classList.remove('active');

        // Lógica de comparación:
        // 1. Si el enlace es exactamente igual a la URL completa (ej: productos.html?gender=hombres)
        if (linkHref === "index.html" && (currentPath.endsWith("index.html") || currentPath === "/")) {
             // Caso especial para el Home si tuvieras un link a home
        } else if (currentPath.includes('productos.html')) {
            // Si estamos en productos, verificamos los parámetros
            if (currentSearch) {
                // Si hay filtro (ej: ?gender=hombres), marcamos solo si coincide exacto
                if (linkHref.includes(currentSearch)) {
                    link.classList.add('active');
                }
            } else {
                // Si NO hay filtro (estamos en "Todos los productos"), marcamos el enlace que no tiene query params
                if (linkHref === 'productos.html') {
                    link.classList.add('active');
                }
            }
        }
    });
}

// ============================================
// CARGA DE PÁGINAS (ACTUALIZADO)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    updateCartCounter();
    
    // --- NUEVO: LLAMADA A LA FUNCIÓN ---
    setActiveMenuItem(); 
    // -----------------------------------

    const path = window.location.pathname;
    
    // ... (El resto de tu código sigue igual) ...
    if (document.getElementById('bestsellers-grid')) {
        loadHomePage();
    }
    // ...
});
function loadHomePage() {
    // 1. Cargar "LOS MÁS DESTACADOS" (Carrusel) - ESTO SE MANTIENE IGUAL
    const bestsellersGrid = document.getElementById('bestsellers-grid');
    if (bestsellersGrid) {
        const items = productsDB.slice(0, 10);
        bestsellersGrid.innerHTML = items.map(p => `
            <div class="carousel-item" onclick="irAlDetalle(${p.id})">
                <div class="carousel-img-container">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <p class="tag-bestseller">BESTSELLER</p>
                <h3>${p.name}</h3>
                <span class="carousel-price">S/ ${p.price.toFixed(2)}</span>
            </div>
        `).join('');
        
        startAutoSlide();
        const container = document.querySelector('.carousel-container');
        if(container){
            container.addEventListener('mouseenter', stopAutoSlide);
            container.addEventListener('mouseleave', startAutoSlide);
        }
    }

    // 2. Cargar "OFERTAS ESPECIALES" (Grid de 4) - ¡AQUÍ ESTÁ EL CAMBIO!
    const offersGrid = document.getElementById('offers-grid');
    if (offersGrid) {
        // Tomamos 4 productos diferentes (ejemplo: del índice 10 al 14)
        const offers = productsDB.slice(0, 4).reverse(); // Invertimos para variar o elige otros índices
        
        offersGrid.innerHTML = offers.map(p => {
            // Simulamos un precio anterior más alto para la oferta
            const oldPrice = (p.price * 1.2).toFixed(2);
            
            return `
            <div class="offer-card" onclick="irAlDetalle(${p.id})">
                <div class="offer-badge">-20%</div>
                <div class="carousel-img-container"> <img src="${p.img}" alt="${p.name}">
                </div>
                <p class="tag-bestseller" style="color: #e62222;">OFERTA LIMITADA</p>
                <h3>${p.name}</h3>
                <div class="prices-wrapper">
                    <span class="old-price">S/ ${oldPrice}</span>
                    <span class="carousel-price">S/ ${p.price.toFixed(2)}</span>
                </div>
            </div>
        `}).join('');
    }
}  
function applyFilters() {
    // CAMBIO IMPORTANTE: Ahora leemos 'nav-search-input'
    const searchInput = document.getElementById('nav-search-input');
    
    // ... el resto de tus variables de checkbox siguen igual ...
    const typeCheckboxes = Array.from(document.querySelectorAll('#type-filter input:checked')).map(i => i.value);
    const brandCheckboxes = Array.from(document.querySelectorAll('#brands-filter input:checked')).map(i => i.value);
    const categoryCheckboxes = Array.from(document.querySelectorAll('#gender-filter input:checked')).map(i => i.value);
    const styleCheckboxes = Array.from(document.querySelectorAll('#style-filter input:checked')).map(i => i.value);
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    let filtered = productsDB.filter(p => {
        // Lógica de búsqueda actualizada
        if (searchTerm && !p.name.toLowerCase().includes(searchTerm) && !p.brand.toLowerCase().includes(searchTerm)) return false;
        
        // Filtros normales
        if (typeCheckboxes.length > 0 && !typeCheckboxes.includes(p.type)) return false;
        if (brandCheckboxes.length > 0 && !brandCheckboxes.includes(p.brand)) return false;
        if (categoryCheckboxes.length > 0 && !categoryCheckboxes.includes(p.category)) return false;
        if (styleCheckboxes.length > 0 && !styleCheckboxes.includes(p.style)) return false;
        
        return true;
    });

    // ... lógica de paginación y renderizado sigue igual ...
    const totalPages = Math.ceil(filtered.length / productsPerPage);
    if (currentPage > totalPages) currentPage = 1;
    const startIndex = (currentPage - 1) * productsPerPage;
    const productsToDisplay = filtered.slice(startIndex, startIndex + productsPerPage);
    
    const grid = document.getElementById('products-grid');
    if (grid) {
        grid.innerHTML = productsToDisplay.map(p => generateProductCard(p)).join('');
        // Actualizar contador de productos encontrados
        const countLabel = document.getElementById('product-count');
        if(countLabel) countLabel.innerText = `Mostrando ${filtered.length} productos`;
    }
    renderPagination(totalPages);
}
// ============================================
// FUNCIONES PARA ALERTA PERSONALIZADA
// ============================================

function mostrarAlerta(mensaje, titulo = "Atención") {
    // 1. Obtener elementos
    const overlay = document.getElementById('custom-alert');
    const msgElement = document.getElementById('custom-alert-message');
    const titleElement = document.getElementById('custom-alert-title');

    // 2. Validar que existan (para evitar errores si no cargó el HTML)
    if (overlay && msgElement && titleElement) {
        msgElement.innerText = mensaje;
        titleElement.innerText = titulo;
        overlay.style.display = 'flex'; // Forzar display flex
        setTimeout(() => {
             overlay.classList.add('active'); // Agregar clase para animación
        }, 10);
    } else {
        // Fallback por si el HTML no está listo
        console.error("Error: No se encontró el modal de alerta en el HTML");
        alert(mensaje); 
    }
}

function cerrarAlerta() {
    const overlay = document.getElementById('custom-alert');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300); // Esperar a que termine la animación
    }
}

// Cerrar al hacer clic fuera (Delegación de eventos segura)
document.addEventListener('click', function(e) {
    if (e.target.id === 'custom-alert') {
        cerrarAlerta();
    }
});
// Cerrar si hacen click fuera de la cajita (en el fondo oscuro)
document.getElementById('custom-alert').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarAlerta();
    }
});
// ============================================
// FUNCIONES PARA ALERTA PERSONALIZADA (ALERTBOX)
// ============================================

function mostrarAlerta(mensaje, titulo = "Atención") {
    // 1. Obtener elementos del DOM
    const overlay = document.getElementById('custom-alert');
    const msgElement = document.getElementById('custom-alert-message');
    const titleElement = document.getElementById('custom-alert-title');

    // 2. Validar que existan
    if (overlay && msgElement && titleElement) {
        msgElement.innerText = mensaje;
        titleElement.innerText = titulo;
        
        // 3. Mostrar con animación
        overlay.style.display = 'flex'; 
        // Pequeño timeout para permitir que la transición CSS ocurra
        setTimeout(() => {
             overlay.classList.add('active'); 
        }, 10);
    } else {
        // Si por alguna razón falló la carga del HTML, usar el alert normal
        alert(mensaje); 
    }
}

function cerrarAlerta() {
    const overlay = document.getElementById('custom-alert');
    if (overlay) {
        overlay.classList.remove('active');
        // Esperar a que termine la animación de salida antes de ocultar
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300); 
    }
}

// Cerrar al hacer clic fuera de la cajita (en el fondo oscuro)
document.addEventListener('click', function(e) {
    if (e.target.id === 'custom-alert') {
        cerrarAlerta();
    }
});