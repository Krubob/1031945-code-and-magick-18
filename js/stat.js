'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeight = 150;
var UP_AND_DOWN_INDENT = 20;
var LEFT_INDENT = 20;
var BAR_Y = CLOUD_Y + UP_AND_DOWN_INDENT + FONT_GAP * 2 + barHeight + 2 * GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono #000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + LEFT_INDENT, CLOUD_Y + UP_AND_DOWN_INDENT);
  ctx.fillText('Список результатов:', CLOUD_X + LEFT_INDENT, CLOUD_Y + UP_AND_DOWN_INDENT + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + LEFT_INDENT * 2 + (BAR_WIDTH + BAR_GAP) * i, BAR_Y + GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + LEFT_INDENT * 2 + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + UP_AND_DOWN_INDENT + FONT_GAP * 2);
  }

  var randomColor = function (hue, lightness) {
    var randomSaturate = Math.floor(Math.random() * 100);
    return 'hsl(' + hue + ', ' + randomSaturate + '%' + ', ' + lightness + '%';
  };

  ctx.fillStyle = randomColor(240, 50);

  for (var j = 0; j < players.length; j++) {
    if (players[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + LEFT_INDENT * 2 + (BAR_WIDTH + BAR_GAP) * j, BAR_Y, BAR_WIDTH, -(barHeight * times[j]) / maxTime);
    ctx.fillStyle = randomColor(240, 50);
  }
};
