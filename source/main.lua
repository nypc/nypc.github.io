--# open lua51

local json = require 'dkjson'
local markdown = require 'markdown'

-------------------------------------------------------------------------------
function make_html(
		sourceDir,	--: string
		targetDir,	--: string
		name		--: string
		)			--> ()

	local fp = io.open(targetDir .. '/' .. name .. '.html', 'wt')
	fp:write([[
<!DOCTYPE html>
<html>
<head>
	<title>
	</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<style>
		h1 { margin-bottom: 20pt; font-size: 22pt; font-weight: bold; }
		h2 { margin-top: 20pt; font-size: 16pt; font-weight: bold; }
		h3 { margin-top: 20pt; font-size: 14pt; font-weight: bold; }
		blockquote { font-size: 11pt; }
		</style>
</head>
<body style='padding:20pt; font-family: 맑은 고딕;'>
<a href='./'>← 목록으로</a>
<hr>
]])

	local descFp = io.open(sourceDir .. '/' .. name .. '.md', 'rt')
	local descText = descFp:read('*a')
	descFp:close()

	descText = descText:gsub('```([^`]*)```', '<pre>%1</pre>')

	descText = descText:gsub('<접기>([^`]*)</접기>', [[<button onclick='document.getElementById("hint_text").style.display="block"; this.style.display="none";' class='btn btn-default'>펼치기</button>
<div id='hint_text' style='display: none;'>
%1
</div>]])

--	fp:write('<h2>' .. title .. '</h2>\n')
local htmlText = markdown(descText)
	fp:write(htmlText)

	fp:write('</body>')
	fp:write('</html>')
	fp:close()
end

make_html('2017', '../2017', '2017_final_a')
make_html('2017', '../2017', '2017_final_b')
make_html('2017', '../2017', '2017_final_c')
make_html('2017', '../2017', '2017_final_d')
make_html('2017', '../2017', '2017_final_e')
make_html('2017', '../2017', '2017_final_f')
make_html('2017', '../2017', '2017_final_g')
for stage = 1, 3 do
	for n = 1, 5 do
		make_html('2017', '../2017', '2017_online_' .. stage .. '-' .. n)
	end
end