$('.clickable')

current = 2
2
$('.clickable').get(current)

$($('.clickable').get(current)).focus()

current = 1

$($('.clickable').get(current)).focus()

$('.clickable').focus()

$('#item_1').focus()

$($('.clickable').get(current)).addClass('entered')

current = (current + 1) % $('.clickable').length

$($('.clickable').get(current)).addClass('entered')