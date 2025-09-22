# Script para atualizar importações após reorganização de pastas

# Diretório base
$baseDir = "c:\Users\Adriana Brito\Downloads\BrainWave-Connect-React-nextjs-migration\BrainWave-Connect-React-nextjs-migration"

# Atualizar importações nos artigos
$articlesDir = "$baseDir\src\components\articles"
Get-ChildItem "$articlesDir\*.jsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Substituir importações de layout
    $content = $content -replace 'import Header from "\./Header"', 'import Header from "../layout/Header"'
    $content = $content -replace 'import Footer from "\./Footer"', 'import Footer from "../layout/Footer"'
    
    # Substituir importações de UI
    $content = $content -replace 'import Quiz from "\./Quiz"', 'import Quiz from "../ui/Quiz"'
    $content = $content -replace 'import ShareModal from "\./ShareModal"', 'import ShareModal from "../ui/ShareModal"'
    
    Set-Content $_.FullName -Value $content -NoNewline
    Write-Host "Atualizado: $($_.Name)"
}

# Atualizar importações nas páginas de artigos
$pagesDir = "$baseDir\pages\artigos"
Get-ChildItem "$pagesDir\*.js" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Substituir importações de componentes (assumindo padrão)
    $content = $content -replace "import (\w+) from '\.\./src/components/(\w+)'", 'import $1 from "../../src/components/articles/$2"'
    $content = $content -replace "import (\w+) from '../src/components/(\w+)'", 'import $1 from "../../src/components/articles/$2"'
    
    Set-Content $_.FullName -Value $content -NoNewline
    Write-Host "Atualizado: $($_.Name)"
}

Write-Host "Atualização de importações concluída!"