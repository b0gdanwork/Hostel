<?php

$recepient = "hostelku@yandex.ru";
$sitename = "Hostel";

$name = trim($_POST["input_E-mail"]);
$phone = trim($_POST["namepeople"]);
$text = trim($_POST["massageforus"]);
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");