import os, re

BASE = os.path.expanduser('~/dev/suntuwu-blog')

# Three articles to process
articles = [
    '2025/07/26/（一）SRM结构Solidworks多实体装配体建模进阶培训/index.html',
    '2025/07/29/（二）SRM结构Solidworks多实体装配体建模进阶培训/index.html',
    '2025/07/29/（三）SRM结构Solidworks多实体装配体建模进阶培训/index.html',
]

for relpath in articles:
    filepath = os.path.join(BASE, relpath)
    if not os.path.exists(filepath):
        print(f"NOT FOUND: {relpath}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    original = content
    
    # 1. Title tag
    content = content.replace(
        'SRM结构组Solidworks多实体建模培训',
        'Solidworks多实体建模培训'
    )
    content = content.replace(
        'SRM结构Solidworks多实体装配体建模进阶培训',
        'Solidworks多实体装配体建模进阶培训'
    )
    
    # 2. og:title
    content = re.sub(
        r'<meta property="og:title" content="（[一二三]）SRM结构组Solidworks多实体建模培训">',
        r'<meta property="og:title" content="Solidworks多实体建模培训">',
        content
    )
    
    # 3. JSON-LD headline
    content = content.replace(
        '"headline": "（一）SRM结构组Solidworks多实体建模培训"',
        '"headline": "（一）Solidworks多实体建模培训"'
    )
    content = content.replace(
        '"headline": "（二）SRM结构组Solidworks多实体建模培训"',
        '"headline": "（二）Solidworks多实体建模培训"'
    )
    content = content.replace(
        '"headline": "（三）SRM结构组Solidworks多实体建模培训"',
        '"headline": "（三）Solidworks多实体建模培训"'
    )
    
    # 4. Inline title (JS data)
    content = content.replace(
        "title: '（一）SRM结构组Solidworks多实体建模培训'",
        "title: '（一）Solidworks多实体建模培训'"
    )
    content = content.replace(
        "title: '（二）SRM结构组Solidworks多实体建模培训'",
        "title: '（二）Solidworks多实体建模培训'"
    )
    content = content.replace(
        "title: '（三）SRM结构组Solidworks多实体建模培训'",
        "title: '（三）Solidworks多实体建模培训'"
    )
    
    # 5. Page title in post-info (h1)
    content = content.replace(
        '（一）SRM结构组Solidworks多实体建模培训',
        '（一）Solidworks多实体建模培训'
    )
    content = content.replace(
        '（二）SRM结构组Solidworks多实体建模培训',
        '（二）Solidworks多实体建模培训'
    )
    content = content.replace(
        '（三）SRM结构组Solidworks多实体建模培训',
        '（三）Solidworks多实体建模培训'
    )
    
    # 6. nav page title
    content = content.replace(
        '（一）SRM结构组Solidworks多实体建模培训',
        '（一）Solidworks多实体建模培训'
    )
    content = content.replace(
        '（二）SRM结构组Solidworks多实体建模培训',
        '（二）Solidworks多实体建模培训'
    )
    content = content.replace(
        '（三）SRM结构组Solidworks多实体建模培训',
        '（三）Solidworks多实体建模培训'
    )
    
    # 7. Body text cleanup
    # "考虑到SRM战队" -> "考虑到战队"
    content = content.replace('SRM战队', '战队')
    
    # "以后不在机械组了呜呜" -> ""
    content = content.replace('主要是以后不在机械组了呜呜, 想多少留下点什么', '想多少留下点什么')
    content = content.replace('主要是以后不在机械组了呜呜，想多少留下点什么', '想多少留下点什么')
    # Also check the HTML-encoded version with <del>
    content = content.replace('<del>主要是以后不在机械组了呜呜, 想多少留下点什么</del>', '想多少留下点什么')
    content = content.replace('<del>主要是以后不在机械组了呜呜，想多少留下点什么</del>', '想多少留下点什么')
    
    # Also clean up any encoded variants
    content = content.replace('以后不在机械组了', '')
    
    # "Robomaster培训文档" -> "培训文档" (article 1, 2, 3 descriptions)
    content = content.replace('Robomaster培训文档: 教你如何', '培训文档: 教你如何')
    content = content.replace('Robomaster培训文档:  &qu', '培训文档')
    content = content.replace('Robomaster培训文档: "多实体', '培训文档: "多实体')
    # Fix any truncated ones
    content = content.replace('Robomaster培训文档:  "', '培训文档')
    
    # "上海大学" -> "" (already done for article 1, check 2 and 3)
    content = content.replace('上海大学', '')
    
    # Clean up "结构组" references in body text
    content = content.replace('结构组', '')
    
    # Clean up "SRM" in URLs - don't change folder names, just visible text
    # Also clean meta description
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        changes = len(content) - len(original)
        print(f"{relpath}: CHANGED ({changes}b)")
    else:
        print(f"{relpath}: NO CHANGE")
