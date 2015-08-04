<?

$brand_URLs = array(
	"brand1.zendesk.com" => "https://page1.example.com/zdlogin.php",
	"support1.example.com" => "https://page1.example.com/zdlogin.php",
	"brand2.zendesk.com" => "https://page2.example.com/zdlogin.php",
	"support2.example.com" => "https://page2.example.com/zdlogin.php"
	);

foreach($brand_URLs as $k => $v){
	if(strpos($_GET['return_to'],$k)){
		header("Location: ". $v);
		die();
	}
}

?>