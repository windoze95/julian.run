package assets

func GetAsset(assetName string) (asset []byte, err error) {
	asset, err = Asset(assetName)
	return
}
