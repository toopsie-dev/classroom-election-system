<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Classroom Election System</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/css/app.css')
</head>
<body>
    <div id="root"></div>
    @viteReactRefresh
    @vite('resources/js/app.ts')
</body>
<script>
    window.env = {
        API_BASE_URL: "{{ env('API_BASE_URL') }}"
    }
</script>
</html>