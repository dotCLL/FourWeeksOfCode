// Photoshop script used to add a background layer and colour
// it to then save the new product image and then cleanup for all
// given colours.
const TYPE_OF_PAINT = "AquaPrep\ ACS/";
const SAVE_DIR = "/Users/chris/Documents/Web\ Development/Brush\ and\ Bristle/Design/Paint\ Cans/Product\ Images/";

colArr = [];
colArr.push(["#F6F6F1", "Wattyl White", "A0w / E070-A"]);
colArr.push(["#E7E9E7", "Strauss White", "E11w / E090-B"]);
colArr.push(["#EEEEE9", "White Delight", "D12w / E080-B"]);
colArr.push(["#EEEDE7", "Calcium", "D11w / E080-A"]);
colArr.push(["#F1EEE7", "Designer White", "SD1-120 / 1-60A"]);
colArr.push(["#E9E9E5", "Feather Dawn", "SE6-110 / 28-20B"]);
colArr.push(["#EDEFE9", "Breeze", "SF1-100 / 28-10A"]);
colArr.push(["#F0ECE5", "Raw Paper", "SD1-110 / 23-40C"]);

colArr.push(["#F2EDE3", "Orchid", "E8w / E060-B"]);
colArr.push(["#F1EDE2", "Chalkdust", "C1w / E030-B"]);
colArr.push(["#D7D3C8", "Alabaster", "A8w / F110-F"]);
colArr.push(["#E6E1D6", "Dhimba", "SD1-100 / 26-60C"]);
colArr.push(["#EBE7DB", "Lilium", "SC4-100 / 26-50D"]);
colArr.push(["#DAD3C9", "Smoke Pearl", "SD1-080 / 23-40A"]);
colArr.push(["#F1EBDF", "Paper White", "SD1-070 / 22-30A"]);
colArr.push(["#F4ECDD", "Fusilli", "SC5-120 / 5-30B"]);
colArr.push(["#F2E2CE", "Intermezzo", "SB6-060 / 17-20A"]);
colArr.push(["#F9F4E5", "Sailcloth White", "SC5-130 / 4-60C"]);

colArr.push(["#404141", "Colorbond Monument", "SF6-010 / 27-30C"]);
colArr.push(["#888077", "Urban Grey", "A72W"]);
colArr.push(["#ABACA7", "Castle Grey", "A25W"]);
colArr.push(["#d5d0c5", "Kitty Grey", "SF6-110 / 26-60A"]);
colArr.push(["#c9c0b4", "Mouse", "SA1-100 / 23-20B"]);
colArr.push(["#62625D", "Colorbond Woodland Grey", "A28W"]);
colArr.push(["#B6B5A8", "Moon Shell", "A80W"]);
colArr.push(["#B7B8B3", "Colorbond Shale Grey", "A24W"]);
colArr.push(["#DBD8CC", "Colorbond Surfmist", "SB6-060 / 17-20A"]);
colArr.push(["#c3c6c5", "Morning Grey", "SF6-080 / 28-30E"]);

for (i in colArr) {
  createBackgroundLayer(colArr[i][0]);
  saveForWeb(colArr[i][1], 100);
};

// Add new layer > colour it with passed hex colour > move behind active layer.
function createBackgroundLayer(hex) {
  var newLayerRef = app.activeDocument.artLayers.add();
  app.activeDocument.selection.selectAll();
  app.activeDocument.selection.fill(paintColour(hex));
  app.activeDocument.selection.deselect();
  newLayerRef.move(app.activeDocument.layers[1], ElementPlacement.PLACEAFTER);
};

// Create a hex colour object.
function paintColour(hex) {
  var shade = new SolidColor();
  var RGB = HEXtoRGB(hex);
  shade.rgb.red = RGB[0];
  shade.rgb.green = RGB[1];
  shade.rgb.blue = RGB[2];
  return shade;
};

// Convert hex codes to an array of RGB values.
function HEXtoRGB (hex) {
  var c = 1
  if (hex.charAt(0) != "#") c = 0;
  var r = parseInt(hex.substring(c,c+2),16)
  var g = parseInt(hex.substring(c+2,c+4),16)
  var b = parseInt(hex.substring(c+4,c+6),16)
  return [r, g, b];
};

// Save the current PS file as a JPEG optimised for web.
function saveForWeb(fileName, jpegQuality) {
  var saveFile = new File(SAVE_DIR + TYPE_OF_PAINT + fileName + '.jpg');
  var sfwOptions = new ExportOptionsSaveForWeb();
  sfwOptions.format = SaveDocumentType.JPEG;
  // sfwOptions.includeProfile = false;
  sfwOptions.interlaced = 0;
  sfwOptions.optimized = true;
  sfwOptions.quality = jpegQuality;
  activeDocument.exportDocument(saveFile, ExportType.SAVEFORWEB, sfwOptions);
  app.activeDocument.layers[1].remove();
};
